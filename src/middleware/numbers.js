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

const validateParametersExist = (req, res, next) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }

  next();
};

const validateBody = (req, res, next) => {
  const radix = 10;

  if (Number.isNaN(parseInt(req.body.a, radix)) || Number.isNaN(parseInt(req.body.b, radix))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }

  req.num1 = parseInt(req.body.a, radix);
  req.num2 = parseInt(req.body.b, radix);

  next();
};

module.exports = { validateNumbers, validateParametersExist, validateBody };
