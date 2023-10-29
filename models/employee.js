//  employees.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  Employee.init(
    {
      name: {
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