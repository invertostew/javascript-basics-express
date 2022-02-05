const { negate, truthiness } = require('../lib/booleans');

const negateBoolean = (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
};

const truthinessBoolean = (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: truthiness(value) });
};

module.exports = {
  negateBoolean,
  truthinessBoolean,
};
