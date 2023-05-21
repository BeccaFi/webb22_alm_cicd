const { CalcMult } = require('../calculator/calcMult');

function calcMultCon(req, res) {
  const val1 = Number(req.query.val1);
  const val2 = Number(req.query.val2);
  const calc = new CalcMult(val1, val2);
  return res.status(200).send(calc.getResult());
}

module.exports = calcMultCon;
