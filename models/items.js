// items.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.hasMany(models.UnitValue, { foreignKey: "itemId" });
      // Item.belongsToMany(models.Record, { through: models.RecordItem });
      Item.hasMany(models.TwItem, { foreignKey: "itemId" });
    }
  }

  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );

  return Item;
};
