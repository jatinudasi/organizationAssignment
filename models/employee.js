"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Employee.init(
    {
        role: {
            type: DataTypes.ENUM("Operator", "Supervisor"),
            allowNull: false,
          },
          shift: {
            type: DataTypes.ENUM("Morning", "Evening", "Night"),
            allowNull: false,
          },
          brandSd: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          dateOfEntry: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          dayEngineerName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          inchargeName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );

  return Employee;
};
