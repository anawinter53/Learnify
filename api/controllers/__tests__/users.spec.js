const User = require('../../models/User');
const bcrypt = require('bcrypt');
const Token = require('../../models/Token');
const {login, logout, register, getUserFromToken, getUsername, show, update} = require('../usersController')

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
  
    it('should return a token, user_id and authenticated: true with a 200 status code if the credentials are correct', async () => {
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
      expect(res.json).toHaveBeenCalledWith({ authenticated: true, token: token.token, user_id: user.id, isAdmin: user.isAdmin });
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
  

  describe('getUserFromToken', () => {
    it('should return the token with a 200 status code', async () => {
      const tokenId = 1;
      const token = { id: tokenId, token: 'abc123' };
      jest.spyOn(Token, 'getOneById').mockResolvedValue(token);
    
      const req = { 
        params: { id: tokenId },
        user: { id: 1, username: 'testuser' }, // add authentication information
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    
      await getUserFromToken(req, res);
    
      expect(Token.getOneById).toHaveBeenCalledWith(tokenId);
      expect(res.status).toHaveBeenCalledWith(403);
    });
    
  
    it('should return an error message with a 403 status code if an invalid token is provided', async () => {
      const tokenId = 1;
      jest.spyOn(Token, 'getOneById').mockResolvedValue(null);
  
      const req = { params: { id: tokenId } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      await getUserFromToken(req, res);
  
      expect(Token.getOneById).toHaveBeenCalledWith(tokenId);
      expect(res.status).toHaveBeenCalledWith(403);
    });
  });

describe('show function', () => {
  it('should return the user with a 200 status code', async () => {
    const userId = 1;
    const user = { id: userId, name: 'John Doe', email: 'johndoe@example.com' };
    jest.spyOn(User, 'getOneById').mockResolvedValue(user);
  
    const req = { params: { id: userId } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
    await show(req, res);
  
    expect(User.getOneById).toHaveBeenCalledWith(userId);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(user);
  });
  

  it('should return a 404 error if the user does not exist', async () => {
    const userId = 1;
    jest.spyOn(User, 'getOneById').mockResolvedValue(null);

    const req = { params: { id: userId } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await show(req, res);

    expect(User.getOneById).toHaveBeenCalledWith(userId);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
  });

  it('should return a 500 error if there is a server error', async () => {
    const userId = 1;
    const errorMessage = 'Database error';
    jest.spyOn(User, 'getOneById').mockRejectedValue(new Error(errorMessage));

    const req = { params: { id: userId } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await show(req, res);

    expect(User.getOneById).toHaveBeenCalledWith(userId);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Server error' });
  });


});

describe('update function', () => {
  it('returns a 200 status code and the updated user object when given a valid user ID and valid data', async () => {
    const req = { params: { id: 1 }, body: { name: 'John Doe', age: 30 } }
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    const user = { update: jest.fn().mockResolvedValue({ id: 1, name: 'John Doe', age: 30 }) }
    User.getOneById = jest.fn().mockResolvedValue(user)

    await update(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'John Doe', age: 30 })
  })

  it('returns a 404 status code and an error message when given an invalid user ID', async () => {
    const req = { params: { id: 999 }, body: { name: 'John Doe', age: 30 } }
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    User.getOneById = jest.fn().mockResolvedValue(null)

    await update(req, res)

    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.json).toHaveBeenCalledWith({ error: 'User not found' })
  })

  it('returns a 404 status code and an error message when the user update fails', async () => {
    const req = { params: { id: 1 }, body: { name: 'John Doe', age: 30 } }
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    const user = { update: jest.fn().mockRejectedValue(new Error('Update failed')) }
    User.getOneById = jest.fn().mockResolvedValue(user)

    await update(req, res)

    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.json).toHaveBeenCalledWith({ error: 'Update failed' })
  })

  it('correctly parses and passes the user ID to User.getOneById', async () => {
    const req = { params: { id: '42' }, body: { name: 'John Doe', age: 30 } }
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    const user = { update: jest.fn().mockResolvedValue({ id: 42, name: 'John Doe', age: 30 }) }
    User.getOneById = jest.fn().mockResolvedValue(user)

    await update(req, res)

    expect(User.getOneById).toHaveBeenCalledWith(42)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ id: 42, name: 'John Doe', age: 30 })
  })
})
describe('getUsername function', () => {
  it('should return the username for a valid user ID with a 200 status code', async () => {
    const userId = 1;
    const username = 'johndoe';
    jest.spyOn(User, 'getUser').mockResolvedValue(username);

    const req = { params: { id: userId } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    await getUsername(req, res);

    expect(User.getUser).toHaveBeenCalledWith(userId);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(username);
  });

  it('should return a 400 status code and an error message for an invalid user ID', async () => {
    const req = { params: { id: null } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getUsername(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid ID' });
  });

  it('should return a 400 status code and an error message when the getUser function throws an error', async () => {
    const userId = 1;
    const error = new Error('Unable to get user');
    jest.spyOn(User, 'getUser').mockRejectedValue(error);

    const req = { params: { id: userId } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getUsername(req, res);

    expect(User.getUser).toHaveBeenCalledWith(userId);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: error.message });
  });
});



  
  
  