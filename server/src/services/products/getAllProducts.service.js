const db = require('../../models');

const getAllProducts = async (filters = {}) => {
  const where = {};

  if (filters.type) {
    where.type = filters.type;
  }
  if (filters.specification) {
    where.specification = filters.specification;
  }

  return db.Product.findAll({ where, include: db.Order });
};

module.exports = getAllProducts;