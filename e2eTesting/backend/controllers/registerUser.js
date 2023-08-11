const bcrypt = require('bcrypt');
const DB = require('../database/dbHelpers');

const registerUserController = async (req, res) => {
	try {
		const { email, cohort, username, password } = req.body;

		if (!email || !cohort || !username || !password) {
			return res.status(400).json({ error: 'All fields are required' });
		}

		const existingUser = await DB.query(`SELECT * FROM Users2 WHERE email = '${email}'`);
		if (existingUser.recordset.length > 0) {
			return res.status(400).json({ error: 'User with this email already exists' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const result = await DB.exec('registerUser', {
			email,
			cohort,
			username,
			password: hashedPassword,
		});

		if (result.returnValue === 0) {
			res.status(200).json({ message: 'User registered successfully' });
		} else {
			res.status(400).json({ error: 'User registration failed' });
		}
	} catch (error) {
		console.error('Error registering user:', error);
		res.status(500).json({ error: 'An error occurred during registration' });
	}
};

module.exports = { registerUserController };
