const { getNthElement, arrayToCSVString, addToArray2 } = require('../lib/arrays');

const elementAt = (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(index, array) });
};

const arrayToString = (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: arrayToCSVString(array) });
};

const arrayAppend = (req, res) => {
  const { array, value } = req.body;
  res.status(200).json({ result: addToArray2(value, array) });
};

module.exports = {
  elementAt,
  arrayToString,
  arrayAppend,
};
