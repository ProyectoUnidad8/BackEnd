import supertest from "supertest";
import { app } from "../src/app";

const api = supertest(app);

let token = '';

beforeAll(async () => {
	jest.setTimeout(100000)
	const response = await api
		.post("/api/v1/user/login/")
		.send({
			email: "admin@gmail.com",
			password: "admin"
		});
	token = response.body.token;
});


describe('Test for /api/v1/pet-diagnostic', () => {
	jest.setTimeout(100000)
	it('should respond a 200 OK', async () => {
		const response = await api
			.get('/api/v1/pet-diagnostic')
			.set('Authorization', `Bearer ${token}`);

		expect(response.statusCode).toBe(200);
	});

	it('should GET a list of JSON type', async () => {
		const response = await api
			.get('/api/v1/pet-diagnostic')
			.set('Authorization', `Bearer ${token}`);

		expect(response.headers['content-type']).toMatch(/application\/json/);
	});

	it('should get an application by ID', async () => {
		const response = await api
			.get('/api/v1/pet-diagnostic/1')
			.set('Authorization', `Bearer ${token}`);

		expect(response.statusCode).toBe(200);

	});
});