const { deleteProduct } = require("../../services/products");

const removeProduct = async (req, res) => {
  const { id } = req.params;
  await deleteProduct(id);
  res.status(204).send();
};

module.exports = removeProduct;