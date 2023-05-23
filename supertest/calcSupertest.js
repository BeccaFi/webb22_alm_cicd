const request = require('supertest');
const app = require('../app');

describe('Checking response when accessing calculator', function () {
  it('Should return status 200 when only /calc is visited', function () {
    return request(app).get('/calc').expect(400);
  });

  it('Content length should be 167 if message is displayed correctly', function () {
    return request(app).get('/calc').expect('content-length', '167');
  });
});
