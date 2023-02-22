import supertest from "supertest";
import { app } from "../src/app";

const api = supertest(app);

describe('Test for /api/v1/pet-adoption', () => {
  jest.setTimeout(100000)
  it('should respond with JSON array', (done) => {
    api
      .get('/api/v1/pet-adoption')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end(function(err, _res) {
          if (err) return done(err);
          done();
      });
  });

  it('should GET a list of all adopted and ready-to-adoopt pets', (done) => {
    api
      .get('/api/v1/pet-adoption')
      .expect(200)
      .end(function(err:any, _res:any) {
          if (err) return done(err);
          done();
      });
  });

  it('should get pet by ID', (done) => {
    api
      .get('/api/v1/pet-adoption/2')
      .expect(200)
      .end(function(err, _res) {
          if (err) return done(err);
          done();
      });
  });
});