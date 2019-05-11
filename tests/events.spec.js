const request = require('supertest');
const app = require('../app')

describe('/events route', () => {
  test('should respond to GET request', (done) => {
    request(app).get('/events').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('should send all the events', (done) => {
    request(app).get('/events').then((response) => {
      expect(response.body.length).toEqual(6);
      done();
    });
  });
  test('should return upcoming and past events one after the other', (done) => {
    request(app).get('/events').then((response) => {
      expect(response.body[0].title).toEqual('Maddy Keynote 2019');
      expect(response.body[5].title).toEqual('Innovators Under 35 Summit Europe 2018');
      done();
    })
  })
});

describe('/events/upcoming route', () => {
  test('should respond to GET request', (done) => {
    request(app).get('/events/upcoming').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('should send upcoming events', (done) => {
    request(app).get('/events/upcoming').then((response) => {
      expect(response.body.length).toEqual(5);
      expect(response.body[0].title).toEqual('Maddy Keynote 2019');
      expect(response.body[4].title).toEqual('Deep Dive Growth / Operations');
      done();
    });
  });
});

describe('/events/past route', () => {
  test('should respond to GET request', (done) => {
    request(app).get('/events/past').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('should send past events', (done) => {
    request(app).get('/events/past').then((response) => {
      expect(response.body.length).toEqual(1);
      expect(response.body[0].title).toEqual('Innovators Under 35 Summit Europe 2018');
      done();
    });
  });
});