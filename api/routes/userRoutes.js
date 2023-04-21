const { Router } = require('express')

const userController = require('../controllers/usersController')

const userRouter = Router();

userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login)
userRouter.post("/logout", userController.logout)
userRouter.get("/username/:id", userController.getUsername)
userRouter.get("/username/token/:id", userController.getUserFromToken)
userRouter.get("/username/single/:id", userController.show)
userRouter.patch("/score/:id", userController.update)
userRouter.patch("/:id", userController.updateDetails)
userRouter.patch("/password/:id", userController.updatePassword)

module.exports = userRouter
