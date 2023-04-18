const api = require('../api');
const supertest = require('supertest-session');
const {createTestDBEnv, destroyTestDBEnv} = require('./DBtable');

const request = supertest(api);

describe('Flashcard routes - /flashcards', () => {
  // create temp tables
  beforeEach(async () => await createTestDBEnv())

  // drop temporary tables
  afterEach(async () => await destroyTestDBEnv())

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
