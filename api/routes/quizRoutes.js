const { Router } = require('express')

const quizController = require("../controllers/quizController");

const quizRouter = Router();

quizRouter.get("/", quizController.index);
quizRouter.get("/:subject", quizController.getBySubject);
quizRouter.get("/single/:id", quizController.getById);

module.exports = quizRouter;
