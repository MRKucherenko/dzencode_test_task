const db = require('../../models');

const getAllOrders = async () => {
  const orders = await db.Order.findAll({ include: db.Product });

  return orders.map((order) => {
    const productsCount = order.Products.length;
    const totalPriceUSD = order.Products.reduce((sum, product) => sum + Number(product.priceUSD), 0);
    const totalPriceUAH = order.Products.reduce((sum, product) => sum + Number(product.priceUAH), 0);

    return { ...order.toJSON(), productsCount, totalPriceUSD, totalPriceUAH};
  });
};

module.exports = getAllOrders;