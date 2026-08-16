const db = require('../../models');
const createError = require('../../utils/createError');

const getOrderById = async (id) => {
  const order = await db.Order.findByPk(id, { include: db.Product });

  if (!order) {
    throw createError('Order not found', 404);
  }

  return order;
};

module.exports = getOrderById;