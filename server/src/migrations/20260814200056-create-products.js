'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      serialNumber: {
        type: Sequelize.INTEGER
      },
      isNew: {
        type: Sequelize.BOOLEAN
      },
      photo: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING
      },
      specification: {
        type: Sequelize.STRING
      },
      guaranteeStart: {
        type: Sequelize.DATE
      },
      guaranteeEnd: {
        type: Sequelize.DATE
      },
      priceUSD: {
        type: Sequelize.DECIMAL(10, 2)
      },
      priceUAH: {
        type: Sequelize.DECIMAL(10, 2)
      },
      date: {
        type: Sequelize.DATE
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id'
        },
      onDelete: 'CASCADE'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
