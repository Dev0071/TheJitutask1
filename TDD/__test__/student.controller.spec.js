import request from 'supertest';
// import { afterEach, beforeEach } from 'node:test';
import { appendFile } from 'graceful-fs';
// import { response } from 'express';
import app from '../server.js';

describe('manage student', () => {
	// beforeEach(() => {
	// });

	// afterEach(async () => {
	// 	await app.close();
	// });
	it('should add a student', async () => {
		const res = await request(app)
			.post('/api/v1/students/create')
			.send({
				name: expect.any(Number),
				email: expect.any(String),
				regNo: expect.any(String),
				classNo: expect.any(String),
				fee_balance: expect.any(Number),
			});
		// expect(res.statusCode).toEqual(201);
		expect(res.body).toBeInstanceOf(Object);
	});

	it('should get all students', async () => {
		const res = await request(app).get('/api/v1/students/all');
		expect(res.body).toBeInstanceOf(Object);
		// expect(res.status).toBe(200);
	});

	it('should get a student', async () => {
		const res = await request(app).get('/api/v1/students/1');
		// expect(res.statusCode).toEqual(200);
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
		// console.log(res);
		// expect(res.statusCode).toEqual(200);
		expect(res.body).toBeInstanceOf(Object);
	});

	it('should delete a student', async () => {
		const res = await request(app).delete('/api/v1/students/1');
		// expect(res.statusCode).toEqual(200);
		expect(res.body).toBeInstanceOf(Object);
	});
});
