const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = 1337;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.get('/:test', (req, res) => {
  // console.log("REQ BODY :", req.body);
  console.log("THIS THING :", req.params.test);
  res.status(200).send(JSON.stringify('CARMAGEDDON'));

  
});

app.listen(PORT, () =>
  console.log(`meme generator server listening on port: ${PORT}`)
);