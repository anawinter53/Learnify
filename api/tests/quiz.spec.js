require('dotenv').config();
const express = require('express');
const cors = require('cors');

const api = express();
api.use(cors());
api.use(express.json());

const request = require('supertest');
const app = require('../api');
const Quiz = require('../models/Quiz');
const quizRoutes = require('../routes/quizRoutes')

api.use(quizRoutes);

describe("/quiz", () => {
    it("GET /", async () => {
        const response = await request(api).get('/');
        expect(response.statusCode).toBe(200);
    });
})

describe('GET /quiz/:subject', () => {
    it('should return a list of quizzes for a given subject', async () => {
        const mockResponse = [
            {
                question_id : 1,
                quiz: "Math",
                question: "What is 2 + 2",
                answer:4,
                fake_answer1: "3",
                fake_answer2: "5",
                fake_answer3: "2"
            },
            {
                question_id : 2,
                quiz: "Math",
                question: "What is 3 + 3",
                answer:6,
                fake_answer1: "3",
                fake_answer2: "5",
                fake_answer3: "2"
            }
        ]
        Quiz.getBySubject = jest.fn().mockResolvedValue(mockResponse);
        const response = await request(app).get('/quiz/Math');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse);
        expect(Quiz.getBySubject).toHaveBeenCalledWith('Math');
    });

    // it('should return an error message if there are no quizzes for the given subject', async () => {
    //     Quiz.getBySubject = jest.fn().mockResolvedValue([]);
    //     const response = await request(app).get('/quiz/Physics');
    //     expect(response.status).toBe(404);
    //     expect(response.body).toEqual({ error: 'No Quizzes available for this subject' });
    //     expect(Quiz.getBySubject).toHaveBeenCalledWith('Physics');
    // });
});
