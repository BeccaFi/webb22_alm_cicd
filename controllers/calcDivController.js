const { CalcDiv } = require('../calculator/calcDiv');

function calcDivCon(req, res) {
  const val1 = Number(req.query.val1);
  const val2 = Number(req.query.val2);
  const calc = new CalcDiv(val1, val2);
  return res.send(calc.getResult());
}

module.exports = calcDivCon;
