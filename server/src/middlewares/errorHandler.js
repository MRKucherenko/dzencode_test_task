const errorHandler = (err, req, res, next) => {
  console.error(err);
  const { statusCode = 500, message = 'Server Error' } = err;
  res.status(statusCode).json({ message });
};

module.exports = errorHandler;