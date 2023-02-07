import supertest from "supertest";
import { app } from "../src/app";


const api = supertest(app);


describe('Test for /api/v1/application', () => {

  it('should respond with JSON array', (done) => {
    api
      .get('/api/v1/application')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end(function(err, _res) {
          if (err) return done(err);
          done();
      });
  });

  it('should GET a list of all applications', (done) => {
    api
      .get('/api/v1/application')
      .expect(200)
      .end(function(err:any, _res:any) {
          if (err) return done(err);
          done();
      });
  });

  it('should get an application by ID', (done) => {
    api
      .get('/api/v1/application/9')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end(function(err, _res) {
          if (err) return done(err);
          done();
      });
  });
});