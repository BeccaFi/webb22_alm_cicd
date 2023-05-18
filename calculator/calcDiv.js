class CalcDiv {
  constructor(value1, value2) {
    this.val1 = value1;
    this.val2 = value2;
    this.result = value1 / value2;
  }

  getResult() {
    return `${this.val1} / ${this.val2} = ${this.result}`;
  }
}

module.exports = { CalcDiv };
