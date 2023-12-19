import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { DB } from '../database/databaseHelpers/index.js';

async function checkIfUserExists(username, email) {
	try {
		const result = await DB.exec('checkIfUserExistsProc', { username, email });

		const userCount = result.recordset[0].count;
		return userCount > 0; 
		
		throw error;
	}
}

//**POST /api/users/ - Register a user
const authUser = async (req, res) => {
	try {
		const id = uuidv4();
		const { username, email, password } = req.body;

		const userExist = await checkIfUserExists(username, email);
		if (userExist) {
			return res.status(409).json({ message: 'user with such credentials already exists' });
		}

		const hashedpasswd = await bcrypt.hash(password, 8);
		// console.log(hashedpasswd);

		await DB.exec('registerUserProc', { id, username, email, password: hashedpasswd });

		res.status(200).json({ message: 'registered successfully' });
	} catch (err) {
		res.status(404).json({ message: 'user already exists' });
	}
};


export { authUser };
