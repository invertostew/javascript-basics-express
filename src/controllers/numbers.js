const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

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

const remainderNumbers = (req, res) => {
  res.status(200).json({ result: remainder(req.body.a, req.body.b) });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  remainderNumbers,
};
