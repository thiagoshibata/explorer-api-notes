const { Router } = require("express")

//Controllers
const UsersController = require("../controllers/UsersController")

//Middleware authentication
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const userRouter = Router()

const usersController = new UsersController()

userRouter.post("/", usersController.create)
userRouter.put("/", ensureAuthenticated, usersController.update)
userRouter.get("/", usersController.index)

module.exports = userRouter
