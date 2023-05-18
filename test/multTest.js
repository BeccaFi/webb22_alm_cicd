const assert = require('assert');

const { CalcMult } = require('../calculator/calcMult');

describe('Calculator Multiply', function () {
  let calc;
  beforeEach(function () {
    calc = new CalcMult();
    this.retries(2);
  });

  describe('getResult()', function () {
    it('Should equal 9 when inserting 3 * 3', function () {
      calc = new CalcMult(3, 3);
      assert.equal(calc.getResult(), '3 * 3 = 9');
    });

    it('Should equal -20 when inserting 4 * -5', function () {
      calc = new CalcMult(4, -5);
      assert.equal(calc.getResult(), '4 * -5 = -20');
    });
  });
});
