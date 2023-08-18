import { Router } from 'express';
import {
	getStudents,
	addStudent,
	updateStudent,
	deleteStudent,
	getStudent,
} from '../controllers/students.controllers.js';
const studentRouter = Router();
studentRouter.get('/', getStudents);
studentRouter.get('/:id', getStudent);
studentRouter.post('/', addStudent);
studentRouter.put('/:id', updateStudent);
studentRouter.delete('/:id', deleteStudent);

export default studentRouter;
