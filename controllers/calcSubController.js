const { CalcSub } = require("../calculator/calcSub");
const { calcSubValidation } = require("../validations/calcSubValidation");

function calcSubCon(req, res) {
  const validation = calcSubValidation(req.query);

  if (validation.error)
    return res.status(400).json(validation.error.details[0].message);

  const val1 = Number(req.query.val1);
  const val2 = Number(req.query.val2);
  const calc = new CalcSub(val1, val2);
  return res.status(200).send(calc.getResult());
}

module.exports = calcSubCon;
