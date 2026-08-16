'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: 'orders',
    timestamps: true
  });

  Order.associate = (models) => {
    Order.hasMany(models.Product, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE'
    });
  }

  return Order;
};