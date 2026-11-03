import carService from "../services/carService.js"

const createCar = async (req, res, next) => {

    try {
        const car = await carService.createCar(req.body)

        res.status(201).json({
            message: "Carro criado com sucesso",
            data: car,
        })
        
    } catch (error) {
        next(error)

    }
}

const getAllCar = async (req, res, next) => {

    try {
        const cars = await carService.getAllCar()

        res.status(200).json({
            menssage: "Carros encontrados com sucesso",
            total: cars.lenght,
            data: cars
        })

    } catch (error) {
        next(error)
    }
}

const getCarById = async (req, res, next) => {

    try {
        const car = await carService.getCarById(req.params.id)

        res.status(200).json({
            message: "Id encontrado com sucesso.",
            data: car
        })

    } catch (error) {
        next(error)

    }
}

const getCarByPlate = async (req, res, next) => {

    try {
        const car = await carService.getCarByPlate(req.params.plate)

        res.status(200).json({
            message: "Placa encontrada com sucesso.",
            data: car
        })

    } catch (error) {
        next(error)

    }
}

const getCarByBrand = async (req, res, next) => {

    try {
        const car = await carService.getCarByBrand(req.params.brand)

        res.status(200).json({
            message: "Marca encontrada com sucesso.",
            data: car
        })

    } catch (error) {
        next(error)

    }
}

const updateCar = async (req, res, next) => {

    try {
        const car = await carService.updateCar(req.params, req.body)

        res.status(200).json({
            message: "Carro editado com sucesso.",
            data: car
        })

    } catch (error) {
        next(error)
    }

}

const deleteCar = async (req, res, next) => {

    try {
        const car = await carService.deleteCar(req.params.id)

        res.status(200).json({
            message: "Carro deletado com sucesso.",
            data: car
        })

    } catch (error) {
        next(error)

    }
}

const getAvailableCars = async (req, res, next) => {

    try {
        const car = await carService.getAvailableCars()

        res.status(200).json({
            message: "Todos os carros disponiveis.",
            data: car
        })

    } catch (error) {
        next(error)

    }
}

const countAvailableCars = async (req, res, next) => {

    try {
        const total = await carService.countAvailableCars()

        res.status(200).json({
            message: "Quantidade de carros disponiveis:",
            total
        })

    } catch (error) {
        next(error)

    }
}

const updateAvailability = async (req, res, next) => {

    try {
        const car = await carService.updateAvailability(req.params.id , req.body.disponivel)

        res.status(200).json({
            message: "Disponibilidade editada com sucesso.",
            data: car
        })

    } catch (error) {
        next(error)
    }

}

const getPriceCar = async (req, res, next) => {

    try {
        const car = await carService.getPriceCar(req.params.min , req.params.max)

        res.status(200).json({
            message: `Carros com intervalo de ${req.params.min} - ${req.params.max}`,
            data: car
        })

    } catch (error) {
        next(error)
    }
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