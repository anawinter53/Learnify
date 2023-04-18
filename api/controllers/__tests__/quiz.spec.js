const Quiz = require('../../models/Quiz');
const {index, getBySubject, getById} = require('../quizController');

describe('index', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return an array of quizzes with a 200 status code', async () => {
    const quizzes = [{ id: 1, name: 'Quiz 1' }, { id: 2, name: 'Quiz 2' }];
    jest.spyOn(Quiz, 'getAll').mockResolvedValue(quizzes);

    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await index(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(quizzes);
  });

  it('should return a 500 status code with an error message if an error occurs', async () => {
    const error = new Error('Something went wrong');
    jest.spyOn(Quiz, 'getAll').mockRejectedValue(error);

    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await index(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: error.message });
  });
});

describe('getBySubject', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    it('should return an array of quizzes with a 200 status code if the subject exists', async () => {
      const subject = 'JavaScript';
      const quizzes = [{ id: 1, name: 'Quiz 1' }, { id: 2, name: 'Quiz 2' }];
      jest.spyOn(Quiz, 'getBySubject').mockResolvedValue(quizzes);
  
      const req = { params: { subject: subject } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await getBySubject(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(quizzes);
    });
  
    it('should return a 404 status code with an error message if the subject does not exist', async () => {
      const subject = 'Nonexistent Subject';
      const error = new Error('Subject not found');
      jest.spyOn(Quiz, 'getBySubject').mockRejectedValue(error);
  
      const req = { params: { subject: subject } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await getBySubject(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  describe('getById', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    it('should return the quiz with the specified ID with a 200 status code', async () => {
      const quiz = { id: 1, name: 'Quiz 1' };
      jest.spyOn(Quiz, 'getById').mockResolvedValue(quiz);
  
      const req = { params: { id: 1 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await getById(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(quiz);
    });
  
    it('should return a 500 status code with an error message if an error occurs', async () => {
      const error = new Error('Something went wrong');
      jest.spyOn(Quiz, 'getById').mockRejectedValue(error);
  
      const req = { params: { id: 1 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await getById(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });
  
  
  
  
  
  
  
