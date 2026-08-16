const db = require('../../models');
const createError = require('../../utils/createError');

const deleteOrder = async (id) => {
  const order = await db.Order.findByPk(id);

  if (!order) {
    throw createError('Order not found', 404);
  }

  await order.destroy();
};

module.exports = deleteOrder;