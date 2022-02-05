const express = require('express');
const { validateIsOddParam, validateCharacterParam } = require('../middleware/booleans');
const {
  negateController,
  truthinessController,
  isOddController,
  startsWithController,
} = require('../controllers/booleans');

const booleansRouter = express.Router();

booleansRouter.post('/negate', negateController);
booleansRouter.post('/truthiness', truthinessController);
booleansRouter.get('/is-odd/:num', validateIsOddParam, isOddController);
booleansRouter.get('/:string/starts-with/:character', validateCharacterParam, startsWithController);

module.exports = booleansRouter;
