const express = require('express');
const checkLength = require('../middleware/strings');
const {
  helloString,
  upperString,
  lowerString,
  firstCharsString,
} = require('../controllers/strings');

const stringsRouter = express.Router();

stringsRouter.get('/hello/:string', helloString);
stringsRouter.get('/upper/:string', upperString);
stringsRouter.get('/lower/:string', lowerString);
stringsRouter.get('/first-characters/:string', checkLength, firstCharsString);

module.exports = stringsRouter;