"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ResourceAllocations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      contractId: {
        type: Sequelize.INTEGER,
      },
      weekStart: {
        type: Sequelize.INTEGER,
      },
      weekEnd: {
        type: Sequelize.INTEGER,
      },
      hoursPerWeek: {
        type: Sequelize.INTEGER,
      },
      customRate: {
        type: Sequelize.INTEGER,
      },
      craft: {
        type: Sequelize.ENUM,
        values: ["Design", "Product", "QA", "Engineering"],
      },
      level: {
        type: Sequelize.ENUM,
        values: ["Junior", "Mid", "Senior"],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ResourceAllocations");
  },
};
