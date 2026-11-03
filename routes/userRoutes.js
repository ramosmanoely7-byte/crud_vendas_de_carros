import express from "express"
import userController from "../controllers/userController.js"

const router = express.Router()

router.post(
    "/",
    userController.createUser
)

router.get(
    "/",
    userController.getAllUser
)

router.get(
    "/:id",
    userController.getUserById
)

router.get(
    "/search/:name",
    userController.searchUserByName
)

router.delete(
    "/:id",
    userController.deleteUser
)

router.get(
    "/email/:email",
    userController.getUserByEmail
)

router.put(
    "/:id",
    userController.updateUser
)

router.get(
    "/count/:users",
    userController.countUsers
)
export default router;