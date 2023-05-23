const joi = require("joi");

const schema = joi.object({
  val1: joi.number().required(),
  val2: joi.number().required(),
});

module.exports.calcAddValidation = (query) => schema.validate(query);
