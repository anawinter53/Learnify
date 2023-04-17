const Flashcard = require("../models/flashcardModel.js");

async function index (req, res) {
    try {
        const flashcards = await Flashcard.getAll();
        res.status(200).json(flashcards);
    } catch (err) {
        res.status(500).json({error : err.message });
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id) 
        const flashcard = await Flashcard.getById(id);
        res.status(200).json(flashcard);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        const user_id = req.user_id;
        const flashcard = await Flashcard.create(data, user_id);
        res.status(201).json(flashcard);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const flashcard = await Flashcard.getById(id);
        const result = await flashcard.destroy();
        res.status(204).json(result);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

async function getByUserId(req, res) {
    try {
        const id = parseInt(req.params.id);
        const flashcards = await Flashcard.getByUserId(id);
        res.status(200).json(flashcards);
    }  catch(err) {
        res.status(500).json({ error: err.message });
    }
}

async function getBySubject(req, res) {
    try {
        const subject = req.params.subject;
        const flashcards = await Flashcard.getBySubject(subject);
        res.status(200).json(flashcards);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

module.exports = { index, show, create, destroy, getByUserId, getBySubject}