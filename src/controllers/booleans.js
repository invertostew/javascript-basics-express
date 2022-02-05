const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const negateController = (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
};

const truthinessController = (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: truthiness(value) });
};

const isOddController = (req, res) => {
  const { num } = req.params;
  res.status(200).json({ result: isOdd(num) });
};

const startsWithController = (req, res) => {
  const { string, character } = req.params;
  res.status(200).json({ result: startsWith(character, string) });
};

module.exports = {
  negateController,
  truthinessController,
  isOddController,
  startsWithController,
};
