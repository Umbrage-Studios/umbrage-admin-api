require("dotenv").config();
const getDates = require("./utils/getDates");
const express = require("express");
const app = express();
var emoji = require("node-emoji");
const { Sequelize } = require("sequelize");
const keys = require("./keys");
const Contracts = require("./models/contracts");
const sequelize = new Sequelize(keys.PG_DATABASE, keys.PG_USER, keys.PG_PASSWORD, {
  host: keys.PG_HOST,
  dialect: "postgres",
  port: keys.PG_PORT,
});

app.listen(process.env.PORT, async () => {
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

  console.log(`${emoji.get("rocket")} Running on port ${process.env.PORT}`);

  setInterval(async () => {
    console.log(Contracts.findAll());
  }, process.env.INTERVAL_TIME);
});
