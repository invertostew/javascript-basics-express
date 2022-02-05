const express = require('express');
const { negateBoolean, truthinessBoolean } = require('../controllers/booleans');

const booleansRouter = express.Router();

booleansRouter.post('/negate', negateBoolean);
booleansRouter.post('/truthiness', truthinessBoolean);

module.exports = booleansRouter;
