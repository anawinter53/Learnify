const api = require('../api');
const supertest = require('supertest-session');

const request = supertest(api);

describe('Flashcard routes - /flashcards', () => {

  it('GET /flashcards/Geography - Should respond with object of flashcards from Geography category', async () => {
    const response = await request.get('/flashcards/Geography');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /flashcards - Should respond with object of all flashcards', async () => {
    const response = await request.get('/flashcards');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});
