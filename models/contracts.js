"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contracts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contracts.init(
    {
      name: DataTypes.STRING,
      startDate: DataTypes.DATE,
      closePercentage: DataTypes.INTEGER,
      status: DataTypes.ENUM(["Prospect", "Active", "Archived", "Complete"]),
      clientId: DataTypes.INTEGER,
      numberOfWeeks: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Contracts",
    }
  );
  return Contracts;
};
