const faker = require("faker");

const memeText = (collection, min, max) => {
  const index = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("INDEX :", index);
  return faker.fake(collection[index]);
};

module.exports = { memeText };
