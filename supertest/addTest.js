// const assert = require('assert');
const request = require('supertest');
const app = require('../app');

// const { CalcAdd } = require('../calculator/calcAdd');

describe('Checking for correct url query inputs', function () {
  it('Should return status 200 when both values included', function () {
    return request(app).get('/calc/add?val1=2&val2=2').expect(200);
  });

  it('Should return status 400 when two values not included', function () {
    return request(app).get('/calc/add?val1=2').expect(400);
  });

  it('Should equal 18 when inserting 5 + 13', function () {
    return request(app).get('/calc/add?val1=5&val2=13').expect('5 + 13 = 18');
  });
});

// describe('Calculator Add', function () {
//   let calc;
//   beforeEach(function () {
//     calc = new CalcAdd();
//     this.retries(2);
//   });

//   describe('getResult()', function () {
//     it('Should equal 4 when inserting 2 + 2', function () {
//       calc = new CalcAdd(2, 2);
//       assert.equal(calc.getResult(), '2 + 2 = 4');
//     });

//     it('Should equal 8 when inserting 3 + 5', function () {
//       calc = new CalcAdd(3, 5);
//       assert.equal(calc.getResult(), '3 + 5 = 8');
//     });
//   });
// });
