"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Clients",
      [
        {
          name: "Shell",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sumitomo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NOV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CPAP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cold Bore Technology",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Start Up Dev",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Schlumberger",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SCGTS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "AWS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hilcorp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Booli",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Motiva",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eleox",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Presidio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Keybank",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Clients", null, {});
  },
};
