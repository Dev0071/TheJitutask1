import request from 'supertest';
import app from '../server.js';

describe('manage student', () => {
	it('should add a student', async () => {
		const res = await request(app)
			.post('/api/v1/students')
			.send({
				name: expect.any(Number),
				email: expect.any(String),
				regNo: expect.any(String),
				class: expect.any(String),
				fee_balance: expect.any(Number),
			});
		expect(res.statusCode).toEqual(201);
		expect(res.body).toBeInstanceOf(Array);
	});

	it('should get all students', async () => {
		const res = await request(app).get('/api/v1/students');
		expect(res.statusCode).toEqual(200);
		expect(res.body).toBeInstanceOf(Array);
	});

	it('should get a student', async () => {
		const res = await request(app).get('/api/v1/students/1');
		expect(res.statusCode).toEqual(200);
		expect(res.body).toBeInstanceOf(Object);
	});

	it('should update a student', async () => {
		const res = await request(app)
			.put('/api/v1/students/1')
			.send({
				name: expect.any(Number),
				email: expect.any(String),
				regNo: expect.any(String),
				class: expect.any(String),
				fee_balance: expect.any(Number),
			});
		expect(res.statusCode).toEqual(200);
		expect(res.body).toBeInstanceOf(Array);
	});

	it('should delete a student', async () => {
		const res = await request(app).delete('/api/v1/students/1');
		expect(res.statusCode).toEqual(200);
		expect(res.body).toBeInstanceOf(Array);
	});
});
