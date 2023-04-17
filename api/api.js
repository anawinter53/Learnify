const flashcardRoute = require("./routes/flashcardRoutes");
const userRouter = require("./routes/userRoutes")
const express = require("express");
const cors = require("cors");


const api = express();

api.use(cors());
api.use(express.json())

api.use("/flashcards", flashcardRoute);
api.use("/users", userRouter)

module.exports = api;