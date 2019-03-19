const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const faker = require("faker");
const app = express();
const PORT = 1337;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.listen(PORT, () =>
  console.log(`meme generator server listening on port: ${PORT}`)
);
