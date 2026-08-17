const db = require('../../models');

const createProduct = async (data) => {
  const product = await db.Product.create(data);
  return product;
};

module.exports = createProduct;
