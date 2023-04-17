const db = require("../config/postgresdb")

class User {
    constructor({ user_id, username, email, password, correct_answers, isAdmin }) {
        this.id = user_id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.correct_answers = correct_answers;
        this.isAdmin = isAdmin;
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM users WHERE user_id = $1;", [id]);
        if (response.rows.length !=1) {
            throw new Error("Unable to locate user.")
        }
        return new User(response.rows[0])
    }

    static async checkIfAdmin(id) {
        const response =await db.query("SELECT isAdmin FROM users WHERE user_id = $1;", [id])
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.")
        }

        return response.rows[0].isAdmin;
    }
}

module.exports = User