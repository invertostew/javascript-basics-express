const validateNumbers = (req, res, next) => {
  const radix = 10;

  if (
    Number.isNaN(parseInt(req.params.num1, radix)) ||
    Number.isNaN(parseInt(req.params.num2, radix))
  ) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  req.num1 = parseInt(req.params.num1, radix);
  req.num2 = parseInt(req.params.num2, radix);

  next();
};

module.exports = validateNumbers;
