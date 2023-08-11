const DB = require('../database/dbHelpers');

const registerUserController = async (req, res) => {
	try {
		const { email, cohort, username, password } = req.body;

		const result = await DB.exec('registerUser', { email, cohort, username, password });

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
