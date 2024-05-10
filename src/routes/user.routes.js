const { Router } = require("express")
const UsersController = require("../controllers/UsersController")
const userRouter = Router()

function myMiddleware(request, response, next) {
  console.log("você passou pelo middlware")
  next()
}

const usersController = new UsersController()

userRouter.post("/", myMiddleware, usersController.create)

module.exports = userRouter
