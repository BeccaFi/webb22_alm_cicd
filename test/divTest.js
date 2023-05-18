const assert = require('assert');

const { CalcDiv } = require('../calculator/calcDiv');

describe('Calculator Divide', function () {
  let calc;
  beforeEach(function () {
    calc = new CalcDiv();
    this.retries(2);
  });

  describe('getResult()', function () {
    it('Should equal 8 when inserting 24 / 3', function () {
      calc = new CalcDiv(24, 3);
      assert.equal(calc.getResult(), '24 / 3 = 8');
    });

    it('Should equal -6 when inserting -30 / 5', function () {
      calc = new CalcDiv(-30, 5);
      assert.equal(calc.getResult(), '-30 / 5 = -6');
    });
  });
});
