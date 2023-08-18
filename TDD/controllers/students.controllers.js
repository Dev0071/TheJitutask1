import { log } from 'console';
import { DB } from '../db/index.js';

const getStudents = async (req, res) => {
	try {
		const { recordset } = await DB.exec('getstudents');

		if (!recordset.length) {
			return res.status(404).json({ message: 'students not found' });
		}
		return res.status(200).json(recordset);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const addStudent = async (req, res) => {
	const { name, email, regNo, classNo, fee_balance } = req.body;
	try {
		if (!name || !email || !regNo || !classNo || !fee_balance) {
			return res.status(400).json({ message: 'all fields are required' });
		}
		const result = await DB.exec('addstudent', { name, email, regNo, classNo, fee_balance });
		if (result.rowsAffected[0] === 1) {
			return res.status(200).json({ message: 'student added successfully' });
		}
		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const updateStudent = async (req, res) => {
	const studentId = req.params.id;
	const { name, email, regNo, classNo, fee_balance } = req.body;

	try {
		const result = await DB.exec('updatestudent', {
			studentId,
			name,
			email,
			regNo,
			classNo,
			fee_balance,
		});
		if (!result.rowsAffected[0]) {
			return res.status(404).json({ message: 'student not found' });
		}
		if (result.rowsAffected[0] === 1) {
			return res.status(200).json({ message: 'student updated successfully' });
		}
		return res.status(200).json(recordset);
	} catch (error) {
		// console.log(error);
		return res.status(500).json(error);
	}
};
const deleteStudent = async (req, res) => {
	const studentId = req.params.id;
	try {
		if (!studentId) {
			return res.status(400).json({ message: 'studentId is required' });
		}
		const result = await DB.exec('deletestudent', { studentId });
		if (!result.rowsAffected[0]) {
			return res.status(404).json({ message: 'student not found' });
		}

		return res.status(200).json({ message: 'student deleted successfully' });
	} catch (error) {
		return res.status(500).json(error);
	}
};
const getStudent = async (req, res) => {
	const studentId = req.params.id;
	try {
		if (!studentId) {
			return res.status(400).json({ message: 'studentId is required' });
		}

		const { recordset } = await DB.exec('getstudent', { studentId });
		if (!recordset.length) {
			return res.status(404).json({ message: 'student not found' });
		}
		return res.status(200).json(recordset);
	} catch (error) {
		return res.status(500).json(error);
	}
};
export { getStudents, addStudent, updateStudent, deleteStudent, getStudent };
