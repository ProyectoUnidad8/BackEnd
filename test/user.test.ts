import supertest from "supertest";
import { app } from "../src/app";

const api = supertest(app);

let token = '';

beforeAll(async() => {
  const response = await api
                            .post("/api/v1/user/login")
                            .send({
                              email:"test@mail.com",
                              password:"123456"
                            });
  token = response.body.token;
});

describe('Test for /api/v1/user', () => {

  it('should respond a 201 when login', async () => {
    const response = await api
                            .post("/api/v1/user/login")
                            .send({
                              email:"test@mail.com",
                              password:"123456"
                            });

    expect(response.statusCode).toBe(201);

  })

  it('should respond a 200 OK', async () => {
    const response = await api
                            .get('/api/v1/user')
                            .set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(200);
  });

  it('should GET a list of all applications', async () => {
    const response = await api
                            .get('/api/v1/user')
                            .set('Authorization', `Bearer ${token}`);

    expect(response.headers['content-type']).toMatch(/application\/json/);
  });

  it('should get an application by ID', async () => {
    const response = await api
                            .get('/api/v1/application/9')
                            .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);

  });
});