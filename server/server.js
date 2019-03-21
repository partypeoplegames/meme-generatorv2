const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const { memeText } = require("../database/textGenerator");
const app = express();
const PORT = 1337;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

const memeArray = [
  "{{name.firstName}}",
  "{{address.streetName}} {{hacker.adjective}} {{hacker.verb}}!!!",
  "{{random.word}} {{hacker.ingverb}} {{random.word}}...",
  "{{name.prefix}} {{name.firstName}} {{hacker.adjective}}?",
  "{{name.prefix}} {{name.lastName}} {{hacker.ingverb}} {{name.jobTitle}}.",
  "{{name.firstName}} Mc'{{hacker.adjective}}son!!!",
  "{{hacker.phrase}}?!?!?",
  "Is this {{hacker.noun}}??",
  "{{company.bs}}, it's the {{company.bsAdjective}}",
  "{{company.catchPhrase}} -{{name.firstName}} {{hacker.ingverb}} {{name.lastName}}",
  "{{company.bsAdjective}} {{company.bsNoun}} {{hacker.ingverb}} {{commerce.product}}"
];

app.get("/generateMeme", (req, res) => {
  const pic = getRandomPicture();
  const meme = memeText(memeArray, 0, 10);
  res.status(200).send({ meme: meme, pic: pic });
});

const getRandomPicture = () => {
  const num = Math.floor(Math.random() * (600 - 1 + 1)) + 1;
  return `https://picsum.photos/200/300/?image=${num}`;
};

console.log(getRandomPicture());

app.listen(PORT, () =>
  console.log(`meme generator server listening on port: ${PORT}`)
);
