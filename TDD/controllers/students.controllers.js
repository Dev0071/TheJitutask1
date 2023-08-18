import { DB } from '../db/index.js';

const getStudents = async (req, res) => {
	try {
		const { recordset } = await DB.exec('getStudents');

		return res.status(200).json(recordset);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const addStudent = async (req, res) => {
	const { student } = req.body;
	try {
		const { recordset } = await DB.exec('addStudent', student);
		return res.status(200).json(recordset);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const updateStudent = async (req, res) => {
	const student = req.body;
	try {
		const { recordset } = await DB.exec('updateStudent', student);
		return res.status(200).json(recordset);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const deleteStudent = async (req, res) => {
	const id = req.params.id;
	try {
		const { recordset } = await DB.exec('deleteStudent', { id });
		return res.status(200).json(recordset);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const getStudent = async (req, res) => {
	const id = req.params.id;
	try {
		const { recordset } = await DB.exec('getStudent', { id });
		return res.status(200).json(recordset);
	} catch (error) {
		return res.status(500).json(error);
	}
};
export { getStudents, addStudent, updateStudent, deleteStudent, getStudent };
