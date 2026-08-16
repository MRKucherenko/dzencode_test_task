const createError = require('../utils/createError');

const notFound = (req, res, next) => {
  next(createError('Not Found', 404));
};

module.exports = notFound;