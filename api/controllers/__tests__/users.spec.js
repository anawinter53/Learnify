const User = require('../../models/User');
const bcrypt = require('bcrypt');
const Token = require('../../models/Token');
const {login, logout, register, getUsernameFromToken, getUsername} = require('../usersController')

describe('register', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    it('should create a new user and return a 201 status code', async () => {
      const req = { body: { username: 'testuser', password: 'testpassword' } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      const mockSalt = 'mockSalt';
      const mockHash = 'mockHash';
      const mockUser = { id: 1, username: 'testuser', password: 'mockHash' };
  
      jest.spyOn(bcrypt, 'genSalt').mockResolvedValue(mockSalt);
      jest.spyOn(bcrypt, 'hash').mockResolvedValue(mockHash);
      jest.spyOn(User, 'create').mockResolvedValue(mockUser);
  
      await register(req, res);
  
      expect(User.create).toHaveBeenCalledWith({ username: 'testuser', password: 'mockHash' });
      expect(bcrypt.hash).toHaveBeenCalledWith('testpassword', 'mockSalt');
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith(mockUser);
    });
  
    it('should return a 400 status code with an error message if an error occurs', async () => {
      const error = new Error('Something went wrong');
      const req = { body: { username: 'testuser', password: 'testpassword' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      jest.spyOn(User, 'create').mockRejectedValue(error);
  
      await register(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  describe('login', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    it('should return a token and authenticated: true with a 200 status code if the credentials are correct', async () => {
      const user = {
        id: 1,
        username: 'user1',
        password: await bcrypt.hash('password1', 10),
        isAdmin: false
      };
      const token = { token: 'token1', userId: 1 };
      jest.spyOn(User, 'getOneByUsername').mockResolvedValue(user);
      jest.spyOn(Token, 'create').mockResolvedValue(token);
  
      const req = { body: { username: 'user1', password: 'password1' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await login(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ authenticated: true, token: token.token, isAdmin: user.isAdmin });
    });
  
    it('should return a 403 status code with an error message if the credentials are incorrect', async () => {
      const user = {
        id: 1,
        username: 'user1',
        password: await bcrypt.hash('password1', 10),
        isAdmin: false
      };
      jest.spyOn(User, 'getOneByUsername').mockResolvedValue(user);
  
      const req = { body: { username: 'user1', password: 'wrongpassword' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await login(req, res);
  
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({ error: 'Incorrect credentials.' });
    });
  
    it('should return a 403 status code with an error message if there is an error', async () => {
      const error = new Error('Something went wrong');
      jest.spyOn(User, 'getOneByUsername').mockRejectedValue(error);
  
      const req = { body: { username: 'user1', password: 'password1' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await login(req, res);
  
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    it('should delete the token and return a 200 status code', async () => {
        const token = 'abc123';
        const tokenObj = { id: 1, token };
        jest.spyOn(Token, 'getOneByToken').mockResolvedValue(tokenObj);
        Object.defineProperty(tokenObj, 'destroy', { value: jest.fn() });
        
        const req = { body: { token } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        
        await logout(req, res);
        
        expect(Token.getOneByToken).toHaveBeenCalledWith(token);
        expect(tokenObj.destroy).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(undefined);
      });
      
      
      
  
    it('should return a 403 status code with an error message if an invalid token is provided', async () => {
      const token = 'abc123';
      jest.spyOn(Token, 'getOneByToken').mockResolvedValue(null);
  
      const req = { body: { token } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await logout(req, res);
  
      expect(Token.getOneByToken).toHaveBeenCalledWith(token);
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid token.' });
    });
  
    it('should return a 403 status code with an error message if an error occurs', async () => {
      const token = 'abc123';
      const error = new Error('Something went wrong');
      jest.spyOn(Token, 'getOneByToken').mockRejectedValue(error);
  
      const req = { body: { token } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await logout(req, res);
  
      expect(Token.getOneByToken).toHaveBeenCalledWith(token);
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });
  
  describe('getUsername function', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('should return the username and a 200 status code', async () => {
      const userId = 1;
      const username = 'johndoe';
      jest.spyOn(User, 'getUsername').mockResolvedValue(username);
  
      const req = { params: { id: userId } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
  
      await getUsername(req, res);
  
      expect(User.getUsername).toHaveBeenCalledWith(userId);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith(username);
    });
  
    it('should return a 400 status code and an error message if an invalid ID is provided', async () => {
      const userId = '';
      const error = new Error('Invalid ID');
      jest.spyOn(User, 'getUsername').mockRejectedValue(error);
  
      const req = { params: { id: userId } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await getUsername(req, res);
  
      expect(User.getUsername).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  describe('getUsernameFromToken', () => {
    it('should return the token with a 200 status code', async () => {
      const tokenId = 1;
      const token = { id: tokenId, token: 'abc123' };
      jest.spyOn(Token, 'getOneById').mockResolvedValue(token);
  
      const req = { params: { id: tokenId } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await getUsernameFromToken(req, res);
  
      expect(Token.getOneById).toHaveBeenCalledWith(tokenId);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(token);
    });
  
    it('should return an error message with a 403 status code if an invalid token is provided', async () => {
      const tokenId = 1;
      jest.spyOn(Token, 'getOneById').mockResolvedValue(null);
  
      const req = { params: { id: tokenId } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await getUsernameFromToken(req, res);
  
      expect(Token.getOneById).toHaveBeenCalledWith(tokenId);
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid token.' });
    });
  });
  
  
  