const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/strings');

const helloController = (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: sayHello(string) });
};

const upperController = (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: uppercase(string) });
};

const lowerController = (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: lowercase(string) });
};

const firstCharactersController = (req, res) => {
  const { string } = req.params;
  const length = req.query.length || 1;
  res.status(200).json({ result: firstCharacters(string, length) });
};

module.exports = {
  helloController,
  upperController,
  lowerController,
  firstCharactersController,
};
