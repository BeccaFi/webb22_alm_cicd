const joi = require("joi");

const schema = joi.object({
  val1: joi.number().required(),
  val2: joi.number().required(),
});

module.exports.calcDivValidation = (query) => schema.validate(query);
