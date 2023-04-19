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

const login = async (req, res) => {
    try {
        const data = req.body;
        const user = await User.getOneByUsername(data.username);
        const authenticated = await bcrypt.compare(
            data.password,
            user["password"]
        );
        if (!authenticated) throw new Error("Incorrect credentials.")
        const token =await Token.create(user.id)
        res.status(200).json({ authenticated: true, token: token.token, isAdmin: user.isAdmin})
    } catch(err) {
        res.status(403).json({ error: err.message})
    }
}

const logout = async (req, res) => {
    try {
        const data = req.body;
        const token = await Token.getOneByToken(data.token)
        if (!token) throw new Error("Invalid token.")
        const result = await token.destroy()
        res.status(200).json(result)
    } catch(err) {
        res.status(403).json({ error: err.message})
    }
}

const getUsername = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) throw new Error("Invalid ID")
        const result = await User.getUsername(parseInt(userId))
        res.status(200).send(result)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

const getUsernameFromToken = async (req, res) => {
    try{
        const tokenId = req.params.id;
        const token = await Token.getOneById(tokenId);
        if (!token) throw new Error("Invalid token.")
        res.status(200).json(token)
    } catch(err) {
        res.status(403).json({error: err.message})
    }
}

const update = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        console.log(id)
        const data = req.body
        const user = await User.getOneById(id)
        console.log(user)
        const result = await user.update(data)
        res.status(200).json(result)
    } catch(err) {
        res.status(404).json({error: err.message})
    }
}

module.exports = {register, login, logout, getUsername, getUsernameFromToken, update}