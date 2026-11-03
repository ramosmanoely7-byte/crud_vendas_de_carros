import Sale from "../models/Sale.js"
import User from "../models/User.js"
import Car from "../models/Cars.js"

const createSale = async (data) => {
    const { userId, carId, valorVenda, formaPagamento } = data

    if (!userId || !carId || !formaPagamento) {
        const error = new Error("Informe todos os dados.")
        error.statusCode = 400
        throw error

    }

    const user = await User.findById(userId)

    if (!user) {
        const error = new Error("Id de usuário inválido.")
        error.statusCode = 400
        throw error
    }

    const car = await Car.findById(carId)

    if (!car) {
        const error = new Error("Id de de carro inválido.")
        error.statusCode = 400
        throw error
    }

    if (car.disponivel === false) {
        const error = new Error("Carro indisponível.")
        error.statusCode = 400
        throw error
    }

    if (valorVenda <= 0) {
        const error = new Error("O valor da venda deve ser maior que 0.")
        error.statusCode = 400
        throw error
    }

    const venda = await Sale.create({
        userId,
        carId,
        valorVenda,
        formaPagamento
    })

    car.disponivel = false
    await car.save()

    return venda
}

const getAllSales = async () => {
    return Sale.find()
        .populate("userId", "nome email")
        .populate("carId")
}

const getSaleById = async (id) => {
    const vendas = await Sale.findById(id);

    if (!vendas) {
        const error = new Error("Id de venda não encontrado.")
        error.statusCode = 404
        throw error
    }

    return vendas
}

const getCountByUserId = async (count) => {

    const user = await User.findById(count);

    if (!user) {
        const error = new Error("Id de usuário não encontrado.")
        error.statusCode = 400
        throw error
    }

    const vendaCount = await Sale.countDocuments({ userId: count })
    return vendaCount
}


const GetSalesByUserId = async (userId) => {

    const user = await User.findById(userId);

    if (!user) {
        const error = new Error("Id de usuário não encontrado.")
        error.statusCode = 400
        throw error
    }

    return Sale.find ({userId})
    .populate ("userId", "nome email")
    .populate ("carId")
}


export default {
    createSale,
    getAllSales,
    getSaleById,
    getCountByUserId,
    GetSalesByUserId



}


