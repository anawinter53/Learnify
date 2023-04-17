const flashcardRoute = require("./routes/flashcardRoutes");
const express = require("express");
const cors = require("cors");


const api = express();

api.use(cors());
api.use(express.json())

api.use("/flashcards", flashcardRoute);

module.exports = api;