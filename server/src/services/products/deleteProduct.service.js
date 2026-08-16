const db = require('../../models');
const createError = require('../../utils/createError');

const deleteProduct = async (id) => {
  const product = await db.Product.findByPk(id);

  if (!product) {
    throw createError('Product not found', 404);
  }

  await product.destroy();
};

module.exports = deleteProduct;