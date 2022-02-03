const checkLength = (req, res, next) => {
  if (!req.query.length) {
    req.query.length = '1';
  }

  next();
};

module.exports = checkLength;
