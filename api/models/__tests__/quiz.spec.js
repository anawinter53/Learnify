const Quiz = require('../Quiz');
const db = require('../../config/postgresdb');


describe('Quiz model', () => {
    describe('getAll method', () => {
        it('should return an array of Quiz objects', async () => {
            const quizzes = await Quiz.getAll();
            expect(quizzes).toBeInstanceOf(Array);
            expect(quizzes[0]).toBeInstanceOf(Quiz);
        });
    });
    describe('getById method', () => {
        it('should return the quiz with specified ID', async () => {
            const mockResponse = {
                rows: [{
                  question_id: 1,
                  quiz: 'History',
                  question: 'Who was the first president of the United States?',
                  answer: 'George Washington',
                  fake_answer1: 'Thomas Jefferson',
                  fake_answer2: 'John Adams',
                  fake_answer3: 'Abraham Lincoln'
                }]
              };

              db.query = jest.fn().mockResolvedValue(mockResponse);

              const quiz = await Quiz.getById(1);

              expect(db.query).toHaveBeenCalledWith('SELECT * FROM quiz WHERE question_id = $1', [1]);

              expect(quiz).toEqual({
                question_id: 1,
                quiz: 'History',
                question: 'Who was the first president of the United States?',
                answer: 'George Washington',
                fake_answer1: 'Thomas Jefferson',
                fake_answer2: 'John Adams',
                fake_answer3: 'Abraham Lincoln'
              });
            });

            it('should throw an error if no quiz is found', async () => {
                // Create a mock response from the database with no rows
                const mockResponse = {
                  rows: []
                };

                db.query = jest.fn().mockResolvedValue(mockResponse);

                try {
                    await Quiz.getById(1);
                  } catch (error) {
                    // Expect an error to be thrown with the correct message
                    expect(error.message).toBe('No Quizzes available');
                  }

                  expect(db.query).toHaveBeenCalledWith('SELECT * FROM quiz WHERE question_id = $1', [1]);

        })
    })
})
