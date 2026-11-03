import express from "express"
import carController from "../controllers/carController.js"

const router = express.Router()

router.post(
    "/",
    carController.createCar
)

router.get(
    "/",
    carController.getAllCar
)
router.get(
    "/:id",
    carController.getCarById
)

router.get(
    "/plate/:plate",
    carController.getCarByPlate
)

router.get(
    "/brand/:brand",
    carController.getCarByBrand
)

router.put(
    "/:id",
    carController.updateCar
)

router.delete(
    "/:id",
    carController.deleteCar
)

router.get(
    "/available/cars",
    carController.getAvailableCars
)

router.get(
    "/available/count",
    carController.countAvailableCars
)

router.patch(
    "/:id/availability",
    carController.updateAvailability
)

router.get(
    "/price/:min/:max",
    carController.getPriceCar
)

export default router;