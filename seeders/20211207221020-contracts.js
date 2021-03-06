"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Contracts",
      [
        {
          name: "SCGTS Argand",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SLB PA Design",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Keybank",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sumitomo Subaru",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eleox",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hilcorp-AWS",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SCGTS Demand Forecasting",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Project 1 - Booli",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Project 1 - Motiva",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SC Trace Commercial",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SCGTS SCTrace Industrialization",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Project 1 - Persidio",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Project 2 - Presidio",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dev Middlelayer",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shell TapUp",
          startDate: new Date(),
          numberOfWeeks: 6,
          closePercentage: 50,
          status: "Prospect",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Contracts", null, {});
  },
};
