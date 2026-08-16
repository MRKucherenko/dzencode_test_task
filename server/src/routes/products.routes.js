const express = require('express');
const { getProducts, removeProduct } = require('../controllers/products');

const router = express.Router();

router.get('/', getProducts);
router.delete('/:id', removeProduct);

module.exports = router;
