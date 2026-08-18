const { getAllProducts } = require("../../services/products");

const getProducts = async (req, res) => {
  const { type } = req.query;
  const products = await getAllProducts({ type });
  res.json(products);
};

module.exports = getProducts;
