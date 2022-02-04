const { add, subtract } = require('../lib/numbers');

const addNumbers = (req, res) => {
  res.status(200).json({ result: add(req.num1, req.num2) });
};

const subtractNumbers = (req, res) => {
  res.status(200).json({ result: subtract(req.num2, req.num1) });
};

module.exports = {
  addNumbers,
  subtractNumbers,
};
