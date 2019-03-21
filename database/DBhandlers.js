const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const { USERNAME, PASSWORD, HOST, DATABASE } = process.env;
const Sequelize = require("sequelize");
// console.log(USERNAME, HOST, PASSWORD, DATABASE);

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Ready for the Memes Sir!");
  })
  .catch(err => {
    console.error("I can't get the Memes:", err);
  });
