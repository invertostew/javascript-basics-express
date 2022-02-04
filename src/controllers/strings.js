const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/strings');

const helloString = (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: sayHello(string) });
};

const upperString = (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: uppercase(string) });
};

const lowerString = (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: lowercase(string) });
};

const firstCharsString = (req, res) => {
  const { string } = req.params;
  const length = req.query.length || 1;
  res.status(200).json({ result: firstCharacters(string, length) });
};

module.exports = {
  helloString,
  upperString,
  lowerString,
  firstCharsString,
};
