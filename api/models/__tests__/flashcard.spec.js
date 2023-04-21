const Flashcard = require('../Flashcard');
const db = require('../../config/postgresdb');

describe('Flashcard model', () => {
    describe('getAll method', () => {
        it('should return  an array of flashcards', async () => {
            const flashcards = await Flashcard.getAll();
            expect(Array.isArray(flashcards)).toBe(true);
        });

        it('should throw an error if there are no flashcards', async () => {
            const mockDb = jest.spyOn(db, 'query').mockReturnValueOnce({ rows: [] });
            await expect(Flashcard.getAll()).rejects.toThrow('No flashcards available');
            mockDb.mockRestore();
        })
    })

    describe('getById method', () => {
        it('should return a flashcard by ID', async () => {
          // assuming there's a flashcard with ID 1 in the database
          const flashcard = await Flashcard.getById(1);
          expect(flashcard).toBeInstanceOf(Flashcard);
          expect(flashcard.card_id).toBe(1);
        });
        it('should throw an error if no flashcard with the given ID is found', async () => {
            // assuming there's no flashcard with ID 999 in the database
            await expect(Flashcard.getById(999)).rejects.toThrow('No flashcards available');
          });
        });
        describe('getByUserId method', () => {
            it('should return an array of flashcards for a user ID', async () => {
              // assuming there are flashcards with user ID 1 in the database
              const flashcards = await Flashcard.getByUserId(1);
              expect(Array.isArray(flashcards)).toBe(true);
              expect(flashcards[0]).toBeInstanceOf(Flashcard);
              expect(flashcards[0].user_id).toBe(1);
            });
            it('should throw an error if no flashcards are found for a user ID', async () => {
                // assuming there are no flashcards with user ID 999 in the database
                await expect(Flashcard.getByUserId(999)).rejects.toThrow('No flashcards available');
              });
            });
            describe('getBySubject method', () => {
                it('should return an array of flashcards with the given subject', async () => {
                    const flashcards = await Flashcard.getBySubject('Geography');
                    expect(Array.isArray(flashcards)).toBe(true);
                    expect(flashcards.length).toBeGreaterThan(0);
                    expect(flashcards.every(f => f.collection === 'Geography')).toBe(true);
                });
        
                it('should throw an error if there are no flashcards with the given subject', async () => {
                    const mockDb = jest.spyOn(db, 'query').mockReturnValueOnce({ rows: [] });
                    await expect(Flashcard.getBySubject('Biology')).rejects.toThrow('No flashcards available for this subject');
                    mockDb.mockRestore();
                });
            });
            describe('create method', () => {
                it('should create a new flashcard', async () => {
                    const data = {
                        collection: 'Geography',
                        question: 'What is the capital of France?',
                        fact: 'The capital of France is Paris.'
                    };
                    const user_id = 1;
                    const flashcard = await Flashcard.create(data, user_id);
                    expect(flashcard).toHaveProperty('card_id');
                    expect(flashcard.collection).toBe('Geography');
                    expect(flashcard.question).toBe('What is the capital of France?');
                    expect(flashcard.fact).toBe('The capital of France is Paris.');
                    expect(flashcard.user_id).toBe(1);
                });
            });
            describe('destroy method', () => {
                it('should delete the flashcard from the database', async () => {
                    const data = {
                        collection: 'History',
                        question: 'Who was the first president of the United States?',
                        fact: 'George Washington was the first president of the United States.'
                    }
                    const user_id = 1;
                    const flashcard = await Flashcard.create(data, user_id);
                    await flashcard.destroy();
                    await expect(Flashcard.getById(flashcard.user_id)).rejects.toThrow('No flashcards available');
                });
            });

            describe('getFavoritesByUser method', () => {
                it('should return an array of favorite flashcards for the given user', async () => {
                  const userId = 3;
                  const favorites = await Flashcard.getFavoritesByUser(userId);
                  expect(Array.isArray(favorites)).toBe(true);
                  expect(favorites.length).toBeGreaterThan(0);
                });
              
                it('should throw an error if there are no favorite flashcards for the given user', async () => {
                  const userId = 2;
                  const mockDb = jest.spyOn(db, 'query').mockReturnValueOnce({ rows: [] });
                  await expect(Flashcard.getFavoritesByUser(userId)).rejects.toThrow('No favorite flashcards found for this user');
                  mockDb.mockRestore();
                });
              });
              
              describe('addFavorite method', () => {
                it('should add the given card as a favorite for the given user', async () => {
                  const userId = 1;
                  const cardId = 3;
                  const added = await Flashcard.addFavorite(userId, cardId);
                  expect(added).toBe(true);
                });
              
                it('should return false if the favorite already exists', async () => {
                  const userId = 1;
                  const cardId = 3;
                  const added = await Flashcard.addFavorite(userId, cardId);
                  expect(added).toBe(false);
                });
              });
              
              describe('destroyFavorite method', () => {
                it('should remove the given card as a favorite for the given user', async () => {
                  const userId = 1;
                  const cardId = 3;
                  const destroyed = await Flashcard.destroyFavorite(userId, cardId);
                  expect(destroyed).toBe(true);
                });
              
                it('should return false if the favorite does not exist', async () => {
                  const userId = 1;
                  const cardId = 30;
                  const destroyed = await Flashcard.destroyFavorite(userId, cardId);
                  expect(destroyed).toBe(true);
                });
              });
              
})