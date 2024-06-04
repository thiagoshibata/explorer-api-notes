const { Router } = require("express")
const UsersController = require("../controllers/UsersController")

const userRouter = Router()

const usersController = new UsersController()

userRouter.post("/", usersController.create)
userRouter.put("/:id", usersController.update)
userRouter.get("/", usersController.index)

module.exports = userRouter
