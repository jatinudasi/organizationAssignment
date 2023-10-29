"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("TwItems", "unitValueId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "UnitValues",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("TwItems", "unitValueId");
  },
};
