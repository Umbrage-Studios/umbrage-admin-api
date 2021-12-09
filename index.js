require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
var emoji = require("node-emoji");
const { Sequelize } = require("sequelize");
const config = require("./config/config");
var models = require("./models");
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "postgres",
});

app.listen(PORT, async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log(`${emoji.get("white_check_mark")} Connected to the database.`);
    })
    .catch((error) => {
      console.log(`${emoji.get("middle_finger")}========== Failed to connect to the database ===========${emoji.get("middle_finger")} `);
      console.log(error);
      console.log(`${emoji.get("middle_finger")}========== Failed to connect to the database ===========${emoji.get("middle_finger")} `);
    });

  console.log(`${emoji.get("rocket")} Running on port ${PORT}`);

  const contracts = await models.Contracts.findAll();
  console.log(contracts);
});
