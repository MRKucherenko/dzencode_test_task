const { getAllOrders } = require("../../services/orders");

const getOrders = async (req, res) => {
  const orders = await getAllOrders();
  res.json(orders);
};

module.exports = getOrders;
