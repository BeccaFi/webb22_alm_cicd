const { CalcAdd } = require('../calculator/calcAdd');

function calcAddCon(req, res) {
  const val1 = Number(req.query.val1);
  const val2 = Number(req.query.val2);
  const calc = new CalcAdd(val1, val2);
  return res.send(calc.getResult());
}

module.exports = calcAddCon;
