const validateIsOddParam = (req, res, next) => {
  const radix = 10;

  if (Number.isNaN(parseInt(req.params.num, radix))) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }

  req.num = parseInt(req.params.num, radix);

  next();
};

const validateCharacterParam = (req, res, next) => {
  if (req.params.character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }

  next();
};

module.exports = { validateIsOddParam, validateCharacterParam };
