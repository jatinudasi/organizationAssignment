// records.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    static associate(models) {
      Record.belongsTo(models.Department ,{ foreignKey: 'departmentId' });
      // Record.belongsTo(models.Roll);
      // Record.belongsTo(models.Shift, { foreignKey: "shiftId" });
      // Record.belongsTo(models.Shift);

      // Record.hasMany(models.RecordItem);
      Record.hasMany(models.TwItem, { foreignKey: "recordId" });
    }
  }

  Record.init(
    {
      brand_sd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      device_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      engineer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      in_charge_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("Operator", "Supervisor"),
        allowNull: false,
      },
      shift: {
        type: DataTypes.ENUM("M-Shift", "E-Shift", "N-Shift"),
        allowNull: false,
      },
      // shiftId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "Shift",
      //     key: "id",
      //   },
      // },
    },
    {
      sequelize,
      modelName: "Record",
    }
  );

  return Record;
};
