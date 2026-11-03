import express from "express"
import saleController from "../controllers/sale.Controller.js"

const router = express.Router()

router.post("/", saleController.createSale)
router.get("/",saleController.getAllSales)
router.get("/:id", saleController.getSaleById)
router.get("/:count/:userId", saleController.getCountByUserId)
router.get("/sales/user/", saleController.GetSalesByUserId)

export default router