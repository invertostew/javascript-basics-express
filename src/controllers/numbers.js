const { add } = require('../lib/numbers');

const addNumbers = (req, res) => {
  res.status(200).json({ result: add(req.num1, req.num2) });
};

module.exports = {
  addNumbers,
};
