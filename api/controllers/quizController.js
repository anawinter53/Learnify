const Quiz = require("../models/Quiz");

async function index (req, res) {
    try {
        const quiz = await Quiz.getAll();
        res.status(200).json(quiz);
    } catch (err) {
        res.status(500).json({error : err.message });
    }
}

async function getBySubject(req, res) {
    try {
        const subject = req.params.subject;
        const quiz = await Quiz.getBySubject(subject);
        res.status(200).json(quiz);
    } catch (err) {
        console.log("error");
        res.status(404).json({ error: err.message });
    }
}
async function getById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const quiz = await Quiz.getById(id);
        res.status(200).json(quiz);
    }  catch(err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {index, getById, getBySubject}