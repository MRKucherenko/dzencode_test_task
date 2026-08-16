const createError = require('../utils/createError');

const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const message = error.details.map((detail) => detail.message).join(', ');
      return next(createError(message, 400));
    }

    req.body = value;
    next();
  };
};

module.exports = validate;