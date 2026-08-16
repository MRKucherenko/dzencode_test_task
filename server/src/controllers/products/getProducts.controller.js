const { getAllProducts } = require("../../services/products");

const getProducts = async (req, res) => {
  const { type, specification } = req.query;
  const products = await getAllProducts({ type, specification });
  res.json(products);
};

module.exports = getProducts;
