const { getNthElement } = require('../lib/arrays');

const elementAt = (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(index, array) });
};

module.exports = {
  elementAt,
};
