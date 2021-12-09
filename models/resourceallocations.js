"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResourceAllocations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResourceAllocations.init(
    {
      resourceId: DataTypes.INTEGER,
      contractId: DataTypes.INTEGER,
      weekStart: DataTypes.INTEGER,
      weekEnd: DataTypes.INTEGER,
      hoursPerWeek: DataTypes.INTEGER,
      craft: DataTypes.ENUM(["Design", "Product", "QA", "Engineering"]),
      level: DataTypes.ENUM(["Junior", "Mid", "Senior"]),
      customRate: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ResourceAllocations",
    }
  );
  return ResourceAllocations;
};
