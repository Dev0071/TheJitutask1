import { DB } from '../../database/databaseHelpers/index.js';
import { createNote, getNote, getNotes, deleteNote } from '../../controllers/notesController';

jest.mock('../../database/databaseHelpers/index.js');

describe('notesControllers', () => {
	const req = {
		body: { content: 'suwdgdftyqftd', title: 'uwfdtfwrdrdi' },
	};
	const res = {
		status: jest.fn().mockReturnThis(),
		json: jest.fn(),
	};
	it('should return note created successfully', async () => {
		DB.exec.mockImplementationOnce(() => ({ rowsAffected: [1] }));

		await createNote(req, res);
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({ message: 'Note created successfully' });
	});
	// jest.restoreAllMocks();
	it('should return note not found', async () => {
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		const id = 'gcytdc87478';
		const req = {
			params: { id },
		};

		DB.exec.mockImplementationOnce(() => ({ recordset: [0] }));
		await getNote(req, res);
		expect(res.status).toHaveBeenCalledWith(404);
		expect(res.json).toHaveBeenCalledWith({ message: 'Note not found' });
	});

	it('should return a note', async () => {
		const note = {
			id: '2db931ae-8437-4884-8b47-9421a58bcccf',
			content: ' hello1 is css framework...',
			title: 'bootstrapcshdyeyus',
			createdAt: '2023-08-04T07:04:40.173Z',
		};
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		const id = 'gcytdc87478';
		const req = {
			params: { id },
		};
		DB.exec.mockImplementationOnce(() => ({ recordset: [note] }));
		await getNote(req, res);
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({ note });
	});

	it('should get all notes', async () => {
		const notes = [
			{
				id: '2db931ae-8437-4884-8b47-9421a58bcccf',
				content: ' hello1 is css framework...',
				title: 'bootstrapcshdyeyus',
				createdAt: '2023-08-04T07:04:40.173Z',
			},
		];
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		const req = {};

		DB.query.mockImplementationOnce(() => ({ recordset: notes }));

		await getNotes(req, res);
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith(notes);
	});

	it('should return failed to delete a note', async () => {
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		const id = 'gcytdc87478';
		const req = {
			params: { id },
		};

		DB.mockImplementationOnce(() => ({ rowsAffected: [[]] }));
		await deleteNote(req, res);
		expect(res.status).toHaveBeenCalledWith(500);
		expect(res.json).toHaveBeenCalledWith({ message: 'Failed to delete note' });
	});
});
