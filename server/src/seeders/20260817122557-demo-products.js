'use strict';

module.exports = {
  async up(queryInterface) {
    const products = [];
    const types = ['Monitors', 'Laptops', 'Keyboards'];

    for (let i = 1; i <= 21; i++) {
      products.push({
        serialNumber: 1000 + i,
        isNew: i % 3 !== 0,
        photo: 'pathToFile.jpg',
        title: `Product ${i}`,
        type: types[i % 3],
        specification: `Specification ${(i % 3) + 1}`,
        guaranteeStart: new Date('2017-06-29'),
        guaranteeEnd: new Date('2025-06-29'),
        priceUSD: (50 + i * 10).toFixed(2),
        priceUAH: (1300 + i * 260).toFixed(2),
        date: new Date('2017-06-29'),
        orderId: (i % 3) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('products', products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  }
};