import saleService from "../services/saleService.js"

const createSale = async (req, res, next) => {

    try {
        const venda = await saleService.createSale(req.body)

        res.status(201).json({
            message: "Venda criada com sucesso.",
            data: venda
        })

    } catch (error) {
        next(error)
    }
}

const getAllSales = async (req, res, next) => {

    try {
        const vendas = await saleService.getAllSales()

        res.status(201).json({
            message: "Venda criada com sucesso.",
            data: vendas
        })

    } catch (error) {
        next(error)
    }
}

const getSaleById = async (req, res, next) => {

    try {
        const venda = await saleService.getSaleById(req.params.id)

        res.status(200).json({
            message: "Venda encontrada com sucesso.",
            data: venda
        })

    } catch (error) {
        next(error)

    }
}

const getCountByUserId = async (req, res, next) => {

    try {
        const vendasCount = await saleService.getCountByUserId(req.params.userId)

        res.status(200).json({
            message: "Quantidade de vendas encontrada com sucesso",
            vendasCount
        })

    } catch (error) {
        next(error)
    }

}

const GetSalesByUserId = async (req, res, next) => {

    try {
        const vendas = await saleService.GetSalesByUserId(req.params.userId)

        res.status(200).json({
            message: "Vendas do usuários encontradas com sucesso",
            vendas
        })

    } catch (error) {
        next(error)
    }

}

export default {
    createSale,
    getAllSales,
    getSaleById,
    getCountByUserId,
    GetSalesByUserId,



}