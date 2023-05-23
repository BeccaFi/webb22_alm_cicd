const joi = require("joi");

const schema = joi.object({
  val1: joi.number().required(),
  val2: joi.number().required(),
});

module.exports.calcMultValidation = (query) => schema.validate(query);
