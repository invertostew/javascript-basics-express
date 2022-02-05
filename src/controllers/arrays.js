const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

const elementAtController = (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(index, array) });
};

const toStringController = (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrayToCSVString(array) });
};

const appendController = (req, res) => {
  const { array, value } = req.body;
  res.status(200).json({ result: addToArray2(value, array) });
};

const startsWithVowelController = (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: elementsStartingWithAVowel(array) });
};

const removeElementController = (req, res) => {
  const { array } = req.body;
  const index = req.body.index || req.query.index;
  res.status(200).json({ result: removeNthElement2(index, array) });
};

module.exports = {
  elementAtController,
  toStringController,
  appendController,
  startsWithVowelController,
  removeElementController,
};
