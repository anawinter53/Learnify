const Token = require("../models/Token")

const authentictor = async (req, res, next) => {
    try {
        const userToken = req.headers["authorisation"]
        if (!userToken) throw new Error("User not authenticated.")
        const validToken = await Token.getOneByToken(userToken)
        req.body["user_id"] = validToken.user_id
        next()
    } catch(err) {
        res.status(403).json({error: err.message})
    }
}

module.exports = authenticator;