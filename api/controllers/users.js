const bcrypt = require("bcrypt")

const User = require("../models/User")
const Token = require("../models/Token")

const register = async (req, res) => {
    try {
        const data = req.body;
        const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
        data["password"] = await bcrypt.hash(data["password"], salt);
        const result = await User.create(data);
        res.status(201).send(result);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

// const login = async (req, res) {
//     const 
// }