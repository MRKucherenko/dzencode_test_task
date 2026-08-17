const express = require('express');
const { getProducts, removeProduct, addProduct } = require('../controllers/products');
const validateRequest = require('../middlewares/validateRequest');
const createProductSchema = require('../validators/createProduct.schema');

const router = express.Router();

router.get('/', getProducts);
router.post('/', validateRequest(createProductSchema), addProduct);
router.delete('/:id', removeProduct);

module.exports = router;
