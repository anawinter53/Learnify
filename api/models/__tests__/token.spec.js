const { v4: uuidv4 } = require('uuid');
const db = require('../../config/postgresdb');
const Token = require('../Token');

describe('Token model', () => {
    describe('create method', () => {
      it('should create a new token for the specified user ID', async () => {
        const userId = 1;
        const mockResponse = {
          rows: [
            {
              token_id: 1,
              user_id: userId,
              token: uuidv4(),
            },
          ],
        };
        db.query = jest.fn().mockResolvedValue(mockResponse);
        const token = await Token.create(userId);
        expect(token.user_id).toBe(userId);
        expect(db.query).toHaveBeenCalledWith(
          'INSERT INTO token (user_id, token) VALUES ($1, $2) RETURNING token_id;',
          [userId, token.token]
        );
      });
    });

    describe('getOneById method', () => {
        it('should return the token with the specified ID', async () => {
          const mockResponse = {
            rows: [
              {
                token_id: 1,
                user_id: 1,
                token: uuidv4(),
              },
            ],
          };
          db.query = jest.fn().mockResolvedValue(mockResponse);
          const token = await Token.getOneById(1);
          expect(token.token_id).toBe(1);
          expect(db.query).toHaveBeenCalledWith(
            'SELECT * FROM token WHERE token_id = $1;',
            [1]
          );
        });

        it('should throw an error if no token is found', async () => {
            const mockResponse = {
              rows: [],
            };
            db.query = jest.fn().mockResolvedValue(mockResponse);
            try {
              await Token.getOneById(1);
            } catch (error) {
              expect(error.message).toBe('Unable to locate token.');
            }
            expect(db.query).toHaveBeenCalledWith(
              'SELECT * FROM token WHERE token_id = $1;',
              [1]
            );
          });
        });

        describe('getOneByToken method', () => {
            it('should return the token with the specified value', async () => {
              const mockResponse = {
                rows: [
                  {
                    token_id: 1,
                    user_id: 1,
                    token: uuidv4(),
                  },
                ],
              };
              const tokenValue = mockResponse.rows[0].token;
              db.query = jest.fn().mockResolvedValue(mockResponse);
              const token = await Token.getOneByToken(tokenValue);
              expect(token.token).toBe(tokenValue);
              expect(db.query).toHaveBeenCalledWith(
                'SELECT * FROM token WHERE token = $1;',
                [tokenValue]
              );
            });

            it('should throw an error if no token is found', async () => {
                const mockResponse = {
                  rows: [],
                };
                db.query = jest.fn().mockResolvedValue(mockResponse);
                const tokenValue = uuidv4();
                try {
                  await Token.getOneByToken(tokenValue);
                } catch (error) {
                  expect(error.message).toBe('Unable to locate token.');
                }
                expect(db.query).toHaveBeenCalledWith(
                  'SELECT * FROM token WHERE token = $1;',
                  [tokenValue]
                );
              });
            });
        })