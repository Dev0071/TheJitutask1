const { registerUserController } = require('./registerUser');
const DB = require('../database/dbHelpers.js');

jest.mock('../database/dbHelpers.js');

describe('registerUser', () => {
	it('should return a 400 error if any fields are missing', async () => {
		const req = {
			body: {
				email: '',
				cohort: '',
				username: '',
				password: '',
			},
		};
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		await registerUserController(req, res);
	});

	it('should return a 400 error if the user already exists', async () => {
		const req = {
			body: {
				email: 'hello@thejitu.com',
				cohort: 'webpt-13',
				username: 'thejitu',
				password: 'password',
			},
		};
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};
		DB.query.mockResolvedValueOnce({ recordset: [{ email: 'hello@thejitu.com' }] });
		await registerUserController(req, res);
		expect(res.status).toHaveBeenCalledWith(400);
		expect(res.json).toHaveBeenCalledWith({ error: 'User with this email already exists' });
	});

	it('should return user registration successful', async () => {
		const req = {
			body: {
				email: 'hello@thejitu.com',
				cohort: 'webpt-13',
				username: 'thejitu',
				password: 'password',
			},
		};
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};
		DB.query.mockResolvedValueOnce({ recordset: [] });
		DB.exec.mockResolvedValueOnce({ rowsAffected: [1] });
		await registerUserController(req, res);
	});
});
