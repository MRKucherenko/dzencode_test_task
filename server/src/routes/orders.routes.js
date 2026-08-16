const express = require('express');
const { getOrder, getOrders, removeOrder } = require('../controllers/orders');

const router = express.Router();

router.get('/', getOrders);
router.get('/:id', getOrder);
router.delete('/:id', removeOrder);

module.exports = router;
