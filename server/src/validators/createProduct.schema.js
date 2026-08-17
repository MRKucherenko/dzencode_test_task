const Joi = require('joi');

const createProductSchema = Joi.object({
  serialNumber: Joi.number().optional(),
  isNew: Joi.boolean().optional(),
  photo: Joi.string().optional(),
  title: Joi.string().required(),
  type: Joi.string().optional(),
  specification: Joi.string().optional(),
  guaranteeStart: Joi.date().optional(),
  guaranteeEnd: Joi.date().optional(),
  priceUSD: Joi.number().optional(),
  priceUAH: Joi.number().optional(),
  date: Joi.date().optional(),
  orderId: Joi.number().required()
});

module.exports = createProductSchema;
