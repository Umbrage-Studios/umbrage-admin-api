"use strict";
const { Contracts } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const contracts = await Contracts.findAll();

    await contracts.forEach((contract) => {
      return queryInterface.bulkInsert(
        "ResourceAllocations",
        [
          {
            contractId: contract.id,
            weekStart: 1,
            weekEnd: contract.numberOfWeeks,
            hoursPerWeek: 40,
            craft: "Product",
            level: ["Junior", "Mid", "Senior"][Math.floor(Math.random() * 3)],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            contractId: contract.id,
            weekStart: 1,
            weekEnd: contract.numberOfWeeks,
            hoursPerWeek: 40,
            craft: "QA",
            level: ["Junior", "Mid", "Senior"][Math.floor(Math.random() * 3)],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            contractId: contract.id,
            weekStart: 1,
            weekEnd: contract.numberOfWeeks,
            hoursPerWeek: 40,
            craft: "Design",
            level: ["Junior", "Mid", "Senior"][Math.floor(Math.random() * 3)],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            contractId: contract.id,
            weekStart: 1,
            weekEnd: contract.numberOfWeeks,
            hoursPerWeek: 40,
            craft: "Engineering",
            level: ["Junior", "Mid", "Senior"][Math.floor(Math.random() * 3)],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            contractId: contract.id,
            weekStart: 1,
            weekEnd: contract.numberOfWeeks,
            hoursPerWeek: 40,
            craft: "Engineering",
            level: ["Junior", "Mid", "Senior"][Math.floor(Math.random() * 3)],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            contractId: contract.id,
            weekStart: 1,
            weekEnd: contract.numberOfWeeks,
            hoursPerWeek: 40,
            craft: "Engineering",
            level: ["Junior", "Mid", "Senior"][Math.floor(Math.random() * 3)],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            contractId: contract.id,
            weekStart: 1,
            weekEnd: contract.numberOfWeeks,
            hoursPerWeek: 40,
            craft: "Engineering",
            level: ["Junior", "Mid", "Senior"][Math.floor(Math.random() * 3)],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ResourceAllocations", null, {});
  },
};
