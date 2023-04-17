const flashcardRoute = require("./routes/flashcardRoutes");

const api = express();

api.use(cors());
api.use(express.json())

api.use("/flashcards", flashcardRoute);

module.exports = api;