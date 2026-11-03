import Car from "../models/Cars.js"

const createCar = async (data) => {
    const { modelo, marca, ano, preco, placa, disponivel } = data

    if (!modelo || !marca || !ano || !placa) {
        const error = new Error("Modelo, marca, ano e placa são obrigatórios.")
        error.statusCode = 400
        throw error
    }

    const carExists = await Car.findOne({ placa })
    if (carExists) {
        const error = new Error("Placa já cadastrada.")
        error.statusCode = 400
        throw error
    }

    const car = await Car.create({
        modelo,
        marca,
        ano,
        preco,
        placa,
    })

    return {
        _id: car.id,
        modelo: car.modelo,
        marca: car.marca,
        ano: car.ano,
        preco: car.preco,
        placa: car.placa,
        createdAt: car.createdAt,
        updateAt: car.updateAt
    }
}

const getAllCar = async () => {
    return Car.find()
}

const getCarById = async (id) => {
    const car = await Car.findById(id);

    if (!car) {
        const error = new Error("Id não encontrado.")
        error.statusCode = 404
        throw error
    }

    return car
}

const getCarByPlate = async (placa) => {
    const car = await Car.findOne({ placa })

    if (!car) {
        const error = new Error("Placa não encontrada.")
        error.statusCode = 404
        throw error
    }

    return car
}

const getCarByBrand = async (brand) => {
    const car = await Car.findOne({ brand })

    if (!car) {
        const error = new Error("Marca não encontrada.")
        error.statusCode = 404
        throw error
    }

    return car
}

const updateCar = async (id, data) => {
    const car = await Car.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })

    if (!car) {
        const error = new Error("Carro não encontrado.")
        error.statusCode = 404
        throw error
    }

    return car
}

const deleteCar = async (id) => {
    const car = await Car.findByIdAndDelete(id)

    if (!Car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const getAvailableCars = async () => {
    const car = await Car.find({ disponivel: true });

    if (!car) {
        const error = new Error("Nenhum carro disponivel.")
        error.statusCode = 404
        throw error
    }

    return car
}

const countAvailableCars = async () => {
    return Car.countDocuments({ disponivel: true });

}

const updateAvailability = async (id, disponivel) => {

    if (disponivel === undefined) {
        const error = new Error("O campo disponivel é obrigatório.")
        error.statusCode = 404
        throw error
    }

    const car = await Car.findByIdAndUpdate(
        id,
        { disponivel },
        { new: true, runValidators: true }
    );

    if (!car) {
        const error = new Error("Carro não encontrado.")
        error.statusCode = 404
        throw error
    }

    return car
}

const getPriceCar = async (min, max) => {
    const minValue = Number(min)
    const maxValue = Number(max)

    if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
        const error = new Error("Os valores min e max precisam ser números.")
        error.statusCode = 404
        throw error
    }

    return Car.find({
        preco: { $gte: minValue, $lte: maxValue },
    })
}

export default {
    createCar,
    getAllCar,
    getCarById,
    getCarByPlate,
    getCarByBrand,
    updateCar,
    deleteCar,
    getAvailableCars,
    countAvailableCars,
    updateAvailability,
    getPriceCar

}