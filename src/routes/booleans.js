const express = require('express');
const { validateIsNumber } = require('../middleware/booleans');
const { negateBoolean, truthinessBoolean, isOddBoolean } = require('../controllers/booleans');

const booleansRouter = express.Router();

booleansRouter.post('/negate', negateBoolean);
booleansRouter.post('/truthiness', truthinessBoolean);
booleansRouter.get('/is-odd/:num', validateIsNumber, isOddBoolean);

module.exports = booleansRouter;
