const { getOrderById } = require("../../services/orders");

const getOrder = async (req, res) => {
  const { id } = req.params;
  const order = await getOrderById(id);
  res.json(order);
};

module.exports = getOrder;
