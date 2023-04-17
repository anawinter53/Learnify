require('dotenv').config();
const { Pool } = require('pg');

const db = new Pool({
    connectionString: process.env.DB_URL
});

let populateTestDBEnv = async () => {
    // insert user data
    await db.query("INSERT INTO pg_temp.user (username, email, password, isAdmin) VALUES ('admin', 'admin@test.com', 'admin', TRUE), ('testuser', 'testuser@test.com', 'testuser', FALSE);");

    // insert quiz data
    await db.query("INSERT INTO pg_temp.quiz (quiz, question, answer, fake_answer1, fake_answer2, fake_answer3) VALUES ('Geography', 'What is the capital of Australia?', 'Canberra', 'Sydney', 'Melbourne', 'Brisbane'), ('Geography', 'What is the highest mountain in Africa?', 'Mount Kilimanjaro', 'Mount Everest', 'Mount Elbrus', 'Denali'),('Sports', 'What is the diameter of a basketball hoop in inches?', '18 inches', '16 inches', '20 inches', '22 inches'), ('Sports', 'What is the name of the professional American football league?', 'NFL (National Football League)', 'NBA (National Basketball Association)', 'NHL (National Hockey League)', 'MLB (Major League Baseball)');");

    // insert flashcard data
    await db.query(`INSERT INTO pg_temp.flashcard (collection, question, fact) VALUES ('Chemistry', 'What is the most abundant element in the Earth's atmosphere?', 'Nitrogen'), ('Chemistry', 'What is the lightest element?', 'Hydrogen'),('Geography', 'What is the capital of Japan?', 'Tokyo'), ('Geography', 'What is the longest river in Africa?', 'Nile');`);
};

const createTestDBEnv = async () => {
    await db.query(`CREATE TEMPORARY TABLE user (LIKE user INCLUDING ALL);`);
    await db.query(`CREATE TEMPORARY TABLE quiz (LIKE quiz INCLUDING ALL);`);
    await db.query(`CREATE TEMPORARY TABLE flashcard (LIKE flashcard INCLUDING ALL);`);

    populateTestDBEnv();
};

const destroyTestDBEnv = async () => {
    await db.query('DROP TABLE IF EXISTS pg_temp.user');
    await db.query('DROP TABLE IF EXISTS pg_temp.quiz');
    await db.query('DROP TABLE IF EXISTS pg_temp.flashcard');
};

module.exports = { db, createTestDBEnv, destroyTestDBEnv };
