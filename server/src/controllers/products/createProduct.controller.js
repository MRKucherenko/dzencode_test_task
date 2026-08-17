const { createProduct } = require("../../services/products");


const addProduct = async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).json(product);
};

module.exports = addProduct;