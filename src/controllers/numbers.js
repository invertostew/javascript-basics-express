const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const addController = (req, res) => {
  res.status(200).json({ result: add(req.num1, req.num2) });
};

const subtractController = (req, res) => {
  res.status(200).json({ result: subtract(req.num2, req.num1) });
};

const multiplyController = (req, res) => {
  res.status(200).json({ result: multiply(req.num1, req.num2) });
};

const divideController = (req, res) => {
  res.status(200).json({ result: divide(req.num1, req.num2) });
};

const remainderController = (req, res) => {
  res.status(200).json({ result: remainder(req.num1, req.num2) });
};

module.exports = {
  addController,
  subtractController,
  multiplyController,
  divideController,
  remainderController,
};
