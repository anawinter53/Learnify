const { Router } = require('express')

const userController = require('../controllers/usersController')

const userRouter = Router();

userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout)
userRouter.get("/username/:id", userController.getUsername)
userRouter.get("/username/token/:id", userController.getUsernameFromToken)

module.exports = userRouter