const User = require('../User');
const db = require('../../config/postgresdb');

describe('User model', () => {
    describe('getOneById method', () => {
        
        it('should return a User object for a valid ID', async () => {
            const user = await User.getOneById(1);

            expect(user.username).toBe('admin');
            expect(user.email).toBe('admin@appname.org');
            expect(user.password).toBe('admin');            
        })
        it('should throw an error for an invalid ID', async () => {
            // try to retrieve a user with a non-existent ID
            await expect(User.getOneById(9999)).rejects.toThrow(Error);
          });
    })
    describe('getOneByUsername', () => {    
        it('should return a user with the correct username', async () => {
            const user = await User.getOneByUsername('admin');
            expect(user.username).toBe('admin');
        });
    
        it('should throw an error if username is not found', async () => {
            await expect(User.getOneByUsername('nonexistentuser')).rejects.toThrow('Unable to locate user.');
        });
    
    });
    describe('getUsername', () => {   
        it('should return the correct username for a valid ID', async () => {
            // Get the ID of the test user from the database
            const result = await db.query("SELECT user_id FROM users WHERE username = $1;", ['admin']);
            const id = result.rows[0].user_id;
    
            const username = await User.getUsername(id);
    
            expect(username).toBe('admin');
        });
    
        it('should throw an error if ID is not found', async () => {
            await expect(User.getUsername(999)).rejects.toThrow('Unable to locate user.');
        });
    
    });
    describe('checkIfAdmin method', () => {
        it('should return true for an admin user', async () => {
            const result = await User.checkIfAdmin(1);
            expect(result).toBe(true);
        });
    
        it('should return false for a regular user', async () => {         
            const result = await User.checkIfAdmin(2);
            expect(result).toBe(false);
    
        });
    
        it('should throw an error for an invalid ID', async () => {
            await expect(User.checkIfAdmin(-1)).rejects.toThrow('Unable to locate user.');
        });
    });

    describe('create method', () => {
        it('should create a new user and return a User object', async () => {
          const data = {
            username: 'newuser',
            email: 'newuser@example.com',
            password: 'password123'
          };
          const newUser = await User.create(data);
          expect(newUser instanceof User).toBe(true);
          expect(newUser.username).toBe('newuser');
          expect(newUser.email).toBe('newuser@example.com');
        });
      
        it('should throw an error if a required field is missing', async () => {
          const data = {
            username: 'newuser',
            password: 'password123'
          };
          await expect(User.create(data)).rejects.toThrow('null value in column "email" violates not-null constraint');
        });
      
        it('should throw an error if the username is already taken', async () => {
          const data = {
            username: 'admin',
            email: 'newuser@example.com',
            password: 'password123'
          };
          await expect(User.create(data)).rejects.toThrow('duplicate key value violates unique constraint "users_username_key"');
        });
      });

      describe('destroy method', () => {
        let user;
      
        beforeEach(async () => {
          // create a new user for each test
            user = await User.create({
            username: 'newtestuser',
            email: 'testuser@example.com',
            password: 'password'
          });
        });
      
        afterEach(async () => {
          // delete the user after each test
          await user.destroy();
        });
      
        it('should delete the user from the database', async () => {
          // check that the user exists before deleting
          const beforeDeletion = await User.getOneById(user.id);
          expect(beforeDeletion).toEqual(user);
      
          // delete the user
          await user.destroy();
      
          // check that the user no longer exists in the database
          await expect(User.getOneById(user.id)).rejects.toThrow('Unable to locate user');
        });
      
        it('should throw an error if the user does not exist', async () => {
          // delete the user before trying to delete again
          await user.destroy();
      
          // attempt to delete the user again
          await expect(user.destroy()).rejects.toThrow('Unable to locate user');
        });
      });
      
      
    
    
    
})