const Flashcard = require("../models/Flashcard.js");

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
        if (!flashcard) {
            throw new Error('Flashcard not found');
        }
        res.status(200).json(flashcard);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}


async function create(req, res) {
    const data = req.body;
    const user_id = req.user_id;
  
    if (!data.question || !data.collection) {
      res.status(400).json({ error: 'Flashcard creation failed: missing question or subject' });
    } else {
      try {
        const flashcard = await Flashcard.create(data, user_id);
        res.status(201).json(flashcard);
      } catch (err) {
        const errorMessage = `Flashcard creation failed: ${err.message}`;
        res.status(404).json({ error: errorMessage });
      }
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
      if (flashcards.length === 0) {
        return res.status(404).json({ error: `No flashcards found with the subject: ${subject}` });
      }
      res.status(200).json(flashcards);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
  

module.exports = { index, show, create, destroy, getByUserId, getBySubject}