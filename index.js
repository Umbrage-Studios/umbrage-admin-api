require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
var emoji = require("node-emoji");
const { Sequelize } = require("sequelize");
const config = require("./config/config");
const { ApolloServer, gql } = require("apollo-server-express");

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "postgres",
});

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

app.listen(PORT, async () => {
  await server.start();
  await server.applyMiddleware({ app });
  await sequelize
    .authenticate()
    .then(() => {
      console.log(`${emoji.get("white_check_mark")} Connected to the database.`);
    })
    .catch((error) => {
      console.log(`${emoji.get("x")}========== Failed to connect to the database ===========${emoji.get("x")} `);
      console.log(error);
      console.log(`${emoji.get("x")}========== Failed to connect to the database ===========${emoji.get("x")} `);
    });

  console.log(`${emoji.get("rocket")} Running on http://localhost:${process.env.PORT}${server.graphqlPath}`);
});
