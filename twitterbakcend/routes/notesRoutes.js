import express from 'express';
import {
	createNote,
	getNotes,
	getNote,
	updateNote,
	deleteNote,
} from '../controllers/notesController.js';
const router = express.Router();

router.post('/create', createNote);
router.get('/all', getNotes);
router.get('/note/:id', getNote);
router.put('/note/:id', updateNote);
router.delete('/note/:id', deleteNote);
export default router;
