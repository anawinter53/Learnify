const { index, show, create, destroy, getByUserId, getBySubject, getFavoritesByUserId } = require('../flashcardController');
const Flashcard = require('../../models/Flashcard');

const mockFlashcards = [  { id: 1, question: 'What is JavaScript?', answer: 'JavaScript is a programming language' },  { id: 2, question: 'What is Node.js?', answer: 'Node.js is a JavaScript runtime environment' },];
const mockFavorites = [ { id: 1, userId: 1, cardId: 1 } ]

jest.mock('../../models/Flashcard', () => ({
    getAll: jest.fn(() => Promise.resolve(mockFlashcards)),
    getById: jest.fn(id => Promise.resolve(mockFlashcards.find(f => f.id === id))),
    create: jest.fn(data => Promise.resolve({ id: 3, ...data })),
    destroy: jest.fn(() => Promise.resolve()),
    getByUserId: jest.fn(userId => Promise.resolve(mockFlashcards.filter(f => f.userId === userId))),
    getBySubject: jest.fn(subject => Promise.resolve(mockFlashcards.filter(f => f.subject === subject))),
    getFavoritesByUserId: jest.fn(userId => Promise.resolve(mockFavorites.filter(f => f.userId === userId))),
  }));

  describe('flashcardController', () => {
    describe('index', () => {
      it('should retrieve all flashcards from the database and return them as a JSON response with a 200 status code', async () => {
        const req = {};
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        await index(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockFlashcards);
      });

      it('should return a 500 status code with an error message if an error occurs during retrieval', async () => {
        Flashcard.getAll.mockImplementationOnce(() => Promise.reject(new Error('Database error')));
        const req = {};
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        await index(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
      });
    });

    describe('show', () => {
        it('should retrieve a single flashcard by ID and return it as a JSON response with a 200 status code', async () => {
          const req = { params: { id: 1 } };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
          };
          await show(req, res);
          expect(res.status).toHaveBeenCalledWith(200);
          expect(res.json).toHaveBeenCalledWith(mockFlashcards[0]);
        });

        it('should return a 404 status code with an error message if the flashcard with the given ID is not found', async () => {
            Flashcard.getById.mockImplementationOnce(() => Promise.resolve(undefined));
            const req = { params: { id: 999 } };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
            await show(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: 'Flashcard not found' });
          });
        });

        describe('create', () => {
          it('should return a 201 status code and the created flashcard if all required data is provided', async () => {
            const req = { body: { question: 'What is the capital of France?', answer: 'Paris', collection: 'Geography' }, user_id: 1 };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
            Flashcard.create.mockImplementationOnce(() => Promise.resolve({ id: 1, ...req.body }));
            await create(req, res);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ id: 1, ...req.body });
          });
        
          it('should return a 404 status code with an error message if the required data is not provided', async () => {
            const req = { body: { answer: 'Paris' }, user_id: 1 };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
            await create(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Flashcard creation failed: Failed to create flashcard' });
          });
        
          it('should return a 400 status code with an error message if there was an error creating the flashcard', async () => {
            const req = { body: { question: 'What is the capital of France?', answer: 'Paris', subject: 'Geography' }, user_id: 1 };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
            Flashcard.create.mockImplementationOnce(() => Promise.reject(new Error('Failed to create flashcard')));
            await create(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Flashcard creation failed: Failed to create flashcard' });
          });
        });    

        describe('destroy', () => {
          it('should delete a flashcard and return a 204 status code', async () => {
            const flashcard = {
              id: 1,
              question: 'What is the capital of France?',
              answer: 'Paris',
              subject: 'Geography',
              user_id: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
              destroy: jest.fn().mockResolvedValue(true),
            };
            Flashcard.getById.mockResolvedValueOnce(flashcard);
            const req = { params: { id: 1 } };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
            await destroy(req, res);
            expect(Flashcard.getById).toHaveBeenCalledWith(1);
            expect(flashcard.destroy).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(204);
            expect(res.json).toHaveBeenCalledWith(true);
          });
        
          it('should return a 404 status code with an error message if the flashcard with the given ID is not found', async () => {
            Flashcard.getById.mockImplementationOnce(() => Promise.resolve(undefined));
            const req = { params: { id: 999 } };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
            await show(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: 'Flashcard not found' });
        });       
          
          it('should return a 404 status code with an error message if there was an error deleting the flashcard', async () => {
            const flashcard = {
              id: 1,
              question: 'What is the capital of France?',
              answer: 'Paris',
              subject: 'Geography',
              user_id: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
              destroy: jest.fn().mockRejectedValue(new Error('Failed to delete flashcard')),
            };
            Flashcard.getById.mockResolvedValueOnce(flashcard);
            const req = { params: { id: 1 } };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
            await destroy(req, res);
            expect(Flashcard.getById).toHaveBeenCalledWith(1);
            expect(flashcard.destroy).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: 'Failed to delete flashcard' });
          });
        });

        describe('getByUserId', () => {
          afterEach(() => {
            jest.resetAllMocks();
          });
        
          it('should return all flashcards of the user with the given ID', async () => {
            const req = { params: { id: 1 } };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
            const flashcards = [{ id: 1, question: 'What is the capital of France?', answer: 'Paris', subject: 'Geography', user_id: 1 }];
            Flashcard.getByUserId.mockImplementationOnce(() => Promise.resolve(flashcards));
            await getByUserId(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(flashcards);
          });
        
          it('should return a 500 status code with an error message if there was an error getting the flashcards', async () => {
            const req = { params: { id: 1 } };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
            Flashcard.getByUserId.mockImplementationOnce(() => Promise.reject(new Error('Failed to get flashcards')));
            await getByUserId(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Failed to get flashcards' });
          });
        });

        describe('getBySubject', () => {
          afterEach(() => {
            jest.clearAllMocks();
          });
        
          it('should return all flashcards with the given subject', async () => {
            const subject = 'Geography';
            const flashcards = [      { id: 1, question: 'What is the capital of France?', answer: 'Paris', subject: 'Geography', user_id: 1 },      { id: 2, question: 'What is the largest country in the world?', answer: 'Russia', subject: 'Geography', user_id: 2 },    ];
            Flashcard.getBySubject.mockImplementationOnce(() => Promise.resolve(flashcards));
            const req = { params: { subject } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            await getBySubject(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(flashcards);
          });
        
          it('should return a 404 status code with an error message if no flashcards are found with the given subject', async () => {
            const subject = 'Biology';
            Flashcard.getBySubject.mockImplementationOnce(() => Promise.resolve([]));
            const req = { params: { subject } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            await getBySubject(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: 'No flashcards found with the subject: Biology' });
          });
        
          it('should return a 404 status code with an error message if there is an error retrieving the flashcards', async () => {
            const subject = 'Geography';
            const errorMsg = 'Error retrieving flashcards';
            Flashcard.getBySubject.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));
            const req = { params: { subject } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            await getBySubject(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: errorMsg });
          });
        });
        
        describe('getFavoritesByUserId', () => {
          it('should return an error if no user id is provided', async () => {
            const req = {
              params: {},
            };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
        
            await getFavoritesByUserId(req, res);
        
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'User id must be provided' });
          });
        
          it('should return an error if an invalid user id is provided', async () => {
            const req = {
              params: {
                id: 'invalid',
              },
            };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
        
            await getFavoritesByUserId(req, res);
        
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Invalid user id' });
          });
        
          it('should return an error if no favorites are found for the user', async () => {
            const req = {
              params: {
                id: 1,
              },
            };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
        
            Flashcard.getFavoritesByUserId = jest.fn().mockResolvedValue([]);
        
            await getFavoritesByUserId(req, res);
        
            expect(Flashcard.getFavoritesByUserId).toHaveBeenCalledWith(1);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: 'No favorites found for this user' });
          });
        
          it('should return the user favorites if they exist', async () => {
            const req = {
              params: {
                id: 1,
              },
            };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
        
            const favorites = [{ id: 1, card_id: 1, user_id: 1 }];
        
            Flashcard.getFavoritesByUserId = jest.fn().mockResolvedValue(favorites);
        
            await getFavoritesByUserId(req, res);
        
            expect(Flashcard.getFavoritesByUserId).toHaveBeenCalledWith(1);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(favorites);
          });
        
          it('should return a 500 error if an error occurs while fetching the favorites', async () => {
            const req = {
              params: {
                id: 1,
              },
            };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            };
        
            const errorMessage = 'An error occurred';
        
            Flashcard.getFavoritesByUserId = jest.fn().mockRejectedValue(new Error(errorMessage));
        
            await getFavoritesByUserId(req, res);
        
            expect(Flashcard.getFavoritesByUserId).toHaveBeenCalledWith(1);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
          });
        });
        
        
        
        
    });