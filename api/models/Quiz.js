const db = require("../config/postgresdb");

class Quiz {
    constructor({
        quiz_id,
        subject,
        question,
        answer,
        fake_answer1,
        fake_answer2,
        fake_answer3
    }) {
        this.quiz_id = quiz_id;
        this.subject = subject;
        this.question = question;
        this.answer = answer;
        this.fake_answer1 = fake_answer1;
        this.fake_answer2 = fake_answer2;
        this.fake_answer3 = fake_answer3;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM quiz;");
        if (response.rows.length === 0) {
            throw new Error ("No Quiz available");
        }
        return response.rows.map((q) => new Quiz(q));
    }

    static async getById(id) {
        const response = await db.query("SELECT * FROM quiz WHERE quiz_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("No Quizzes available");
        }
        return new Quiz(response.rows[0]);
    }

    static async getBySubject(subject) {
        const response = await db.query("SELECT * FROM quiz WHERE LOWER(subject) = $1", [subject]);
        if (response.rows.length == 0) {
            throw new Error("No Quizzes available for this subject");
        }
        return response.rows.map((q) => new Quiz(q));
    }

}

module.exports = Quiz;
