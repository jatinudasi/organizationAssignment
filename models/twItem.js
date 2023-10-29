"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TwItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TwItem.belongsTo(models.Item, { foreignKey: "itemId" });
      TwItem.belongsTo(models.UnitValue, { foreignKey: "unitValueId" });
      // TwItem.belongsTo(models.UnitValue);
      TwItem.belongsTo(models.Record, { foreignKey: "recordId" });
      // TwItem.belongsTo(models.Record);
    }
  }

  TwItem.init(
    {
      tw_1_a_shift: {
        type: DataTypes.ENUM("M-Shift", "E-Shift", "N-Shift"),
        allowNull: false,
      },
      tw_1_a_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tw_1_b_shift: {
        type: DataTypes.ENUM("M-Shift", "E-Shift", "N-Shift"),
        allowNull: false,
      },
      tw_1_b_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TwItem",
    }
  );

  return TwItem;
};
