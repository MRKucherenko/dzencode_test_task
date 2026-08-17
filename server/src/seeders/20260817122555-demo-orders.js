'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('orders', [
      { title: 'Order 1', date: new Date('2017-06-29'), description: 'Первая поставка техники', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Order 2', date: new Date('2017-08-15'), description: 'Вторая поставка', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Order 3', date: new Date('2017-10-06'), description: 'Третья поставка', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
