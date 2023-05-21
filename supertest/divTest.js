// const assert = require('assert');
const request = require('supertest');
const app = require('../app');

// const { CalcDiv } = require('../calculator/calcDiv');

describe('Checking for correct url query inputs', function () {
  it('Should return status 200 when both values included', function (done) {
    request(app).get('/calc/div?val1=50&val2=2').expect(200, done());
  });

  it('Should return status 400 when two values not included', function (done) {
    request(app).get('/calc/add?val1=103').expect(400, done());
  });

  it('Should equal 12 when inserting 36 / 3', function (done) {
    request(app).get('/calc/add?val1=5&val2=13').expect('36 / 3 = 12', done());
  });
});

// describe('Calculator Divide', function () {
//   let calc;
//   beforeEach(function () {
//     calc = new CalcDiv();
//     this.retries(2);
//   });

//   describe('getResult()', function () {
//     it('Should equal 8 when inserting 24 / 3', function () {
//       calc = new CalcDiv(24, 3);
//       assert.equal(calc.getResult(), '24 / 3 = 8');
//     });

//     it('Should equal -6 when inserting -30 / 5', function () {
//       calc = new CalcDiv(-30, 5);
//       assert.equal(calc.getResult(), '-30 / 5 = -6');
//     });
//   });
// });