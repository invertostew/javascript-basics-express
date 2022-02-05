const validateIsNumber = (req, res, next) => {
  const radix = 10;

  if (Number.isNaN(parseInt(req.params.num, radix))) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }

  req.num = parseInt(req.params.num, radix);

  next();
};

module.exports = { validateIsNumber };
