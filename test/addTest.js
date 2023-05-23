const assert = require("assert");
const { CalcAdd } = require("../calculator/calcAdd");

describe("Calculator Add", function () {
  let calc;
  beforeEach(function () {
    calc = new CalcAdd();
    this.retries(2);
  });

  describe("getResult()", function () {
    it("Should equal 4 when inserting 2 + 2", function () {
      calc = new CalcAdd(2, 2);
      assert.equal(calc.getResult(), "2 + 2 = 4");
    });

    it("Should equal 8 when inserting 3 + 5", function () {
      calc = new CalcAdd(3, 5);
      assert.equal(calc.getResult(), "3 + 5 = 8");
    });
  });
});
