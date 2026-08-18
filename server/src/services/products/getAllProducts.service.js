const db = require('../../models');

const getAllProducts = async (filters = {}) => {
  const where = {};

  if (filters.type) {
    where.type = filters.type;
  }

  return db.Product.findAll({ where, include: db.Order });
};

module.exports = getAllProducts;