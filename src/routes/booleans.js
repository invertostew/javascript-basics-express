const express = require('express');
const { validateIsNumber, validateSingleCharacter } = require('../middleware/booleans');
const {
  negateBoolean,
  truthinessBoolean,
  isOddBoolean,
  startsWithBoolean,
} = require('../controllers/booleans');

const booleansRouter = express.Router();

booleansRouter.post('/negate', negateBoolean);
booleansRouter.post('/truthiness', truthinessBoolean);
booleansRouter.get('/is-odd/:num', validateIsNumber, isOddBoolean);
booleansRouter.get('/:string/starts-with/:character', validateSingleCharacter, startsWithBoolean);

module.exports = booleansRouter;
