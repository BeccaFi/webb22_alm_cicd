const assert = require('assert');

const { CalcSub } = require('../calculator/calcSub');

describe('Calculator Subtract', function () {
  let calc;
  beforeEach(function () {
    calc = new CalcSub();
    this.retries(2);
  });

  describe('getResult()', function () {
    it('Should equal 0 when inserting 2 - 2', function () {
      calc = new CalcSub(2, 2);
      assert.equal(calc.getResult(), '2 - 2 = 0');
    });

    it('Should equal 4 when inserting 10 - 6', function () {
      calc = new CalcSub(10, 6);
      assert.equal(calc.getResult(), '10 - 6 = 4');
    });
  });
});
