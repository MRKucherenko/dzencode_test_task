'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    serialNumber: {
      type: DataTypes.INTEGER
    },
    isNew: {
      type: DataTypes.BOOLEAN
    },
    photo: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING
    },
    specification: {
      type: DataTypes.STRING
    },
    guaranteeStart: {
      type: DataTypes.DATE
    },
    guaranteeEnd: {
      type: DataTypes.DATE
    },
    priceUSD: {
      type: DataTypes.DECIMAL(10, 2)
    },
    priceUAH: {
      type: DataTypes.DECIMAL(10, 2)
    },
    date: {
      type: DataTypes.DATE
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'products',
    timestamps: true
  });

  Product.associate = (models) => {
  Product.belongsTo(models.Order, {
    foreignKey: 'orderId'
  });
};

  return Product;
};