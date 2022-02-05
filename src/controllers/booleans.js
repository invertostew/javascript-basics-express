const { negate, truthiness, isOdd } = require('../lib/booleans');

const negateBoolean = (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
};

const truthinessBoolean = (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: truthiness(value) });
};

const isOddBoolean = (req, res) => {
  const { num } = req.params;
  res.status(200).json({ result: isOdd(num) });
};

module.exports = {
  negateBoolean,
  truthinessBoolean,
  isOddBoolean,
};
