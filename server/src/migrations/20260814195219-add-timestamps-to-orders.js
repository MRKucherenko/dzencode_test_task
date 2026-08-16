'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('orders', 'createdAt', {
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('orders', 'updatedAt', {
      type: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('orders', 'createdAt');
    await queryInterface.removeColumn('orders', 'updatedAt');
  }
};
