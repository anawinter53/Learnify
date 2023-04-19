const db = require("../config/postgresdb")

class User {
    constructor({ user_id, username, email, password, score, score_out_of, isAdmin }) {
        this.id = user_id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.score = score;
        this.score_out_of = score_out_of
        this.isAdmin = isAdmin;
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM users WHERE user_id = $1;", [id]);
        if (response.rows.length !=1) {
            throw new Error("Unable to locate user.")
        }
        return new User(response.rows[0])
    }

    static async getOneByUsername(username) {
        const response = await db.query("SELECT * FROM users WHERE username = $1;", [username]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.")
        }
        return new User(response.rows[0])
    }

    static async getUser(id) {
        const response = await db.query("SELECT username FROM users WHERE user_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.")
        }
        return response.rows[0].username;
    }

    static async checkIfAdmin(id) {
        const response = await db.query("SELECT isadmin FROM users WHERE user_id = $1;", [id])
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.")
        }
    
        return response.rows[0].isadmin;
    }
    

    static async create(data) {
        const { username, email, password } = data;
        const response = await db.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id;", [username, email, password])
        const newId = response.rows[0].user_id;
        const newUser = await User.getOneById(newId);
        return newUser;
    }

    async destroy() {
        const response = await db.query("DELETE FROM users WHERE user_id = $1;", [this.id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user");
        }
        return response;
    }
    

    async update(data) {
        const { score, score_out_of } = data
        const response = await db.query("UPDATE users SET score = $1, score_out_of = $2 WHERE user_id = $3 RETURNING *;", [this.score + score, this.score_out_of + score_out_of, this.id])
        if (response.rows.length != 1) {
            throw new Error("Unable to update score")
        }
        return new User(response.rows[0])
    }
}

module.exports = User