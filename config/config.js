require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "umbrage-admin-development",
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "umbrage-admin-test",
    host: DB_HOST,
    dialect: "postgres",
  },
};
