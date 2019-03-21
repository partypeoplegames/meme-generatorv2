const faker = require("faker");

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

const memeText = (collection, min, max) => {
  const index = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("INDEX :", index);
  return faker.fake(collection[index]);
};

console.log(memeText(memeArray, 0, memeArray.length - 1));

module.exports = { memeText };
