const { Router } = require("express");

const flashCardController = require('../controllers/flashcardController');
// const authenticator = require('../middleware/authenticator');

const flashcardRouter = Router();

flashcardRouter.get("/", flashCardController.index);
flashcardRouter.get("/:subject", flashCardController.getBySubject);
flashcardRouter.get("/:id", flashCardController.show);
flashcardRouter.get("/user/:id", flashCardController.getByUserId);
// flashcardRouter.post("/", authenticator, flashCardController.create);
flashcardRouter.delete("/:id", flashCardController.destroy);

module.exports = flashcardRouter;