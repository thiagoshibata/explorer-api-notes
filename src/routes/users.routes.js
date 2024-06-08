const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload") //configurações do upload

//Controllers
const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")

//Middleware authentication
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER) //aplicando configurações no multer

const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

userRoutes.post("/", usersController.create)
userRoutes.put("/", ensureAuthenticated, usersController.update)
userRoutes.get("/", usersController.index)
userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
)

module.exports = userRoutes
