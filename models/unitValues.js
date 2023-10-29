// unitvalues.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UnitValue extends Model {
    static associate(models) {
      UnitValue.belongsTo(models.Item, { foreignKey: "itemId" });
      UnitValue.hasMany(models.TwItem, { foreignKey: "unitValueId" });
    }
  }

  UnitValue.init(
    {
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UnitValue",
    }
  );

  return UnitValue;
};
