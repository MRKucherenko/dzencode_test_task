const { deleteOrder } = require("../../services/orders");

const removeOrder = async (req, res) => {
  const { id } = req.params;
  await deleteOrder(id);
  res.status(204).send();
};

module.exports = removeOrder;
