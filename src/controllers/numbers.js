const { add, subtract, multiply, divide } = require('../lib/numbers');

const addNumbers = (req, res) => {
  res.status(200).json({ result: add(req.num1, req.num2) });
};

const subtractNumbers = (req, res) => {
  res.status(200).json({ result: subtract(req.num2, req.num1) });
};

const multiplyNumbers = (req, res) => {
  res.status(200).json({ result: multiply(req.num1, req.num2) });
};

const divideNumbers = (req, res) => {
  res.status(200).json({ result: divide(req.num1, req.num2) });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
