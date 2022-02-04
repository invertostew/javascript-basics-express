const express = require('express');
const { validateNumbers, validateParametersExist, validateBody } = require('../middleware/numbers');
const { addNumbers, subtractNumbers, multiplyNumbers } = require('../controllers/numbers');

const numbersRouter = express.Router();

numbersRouter.get('/add/:num1/and/:num2', validateNumbers, addNumbers);
numbersRouter.get('/subtract/:num1/from/:num2', validateNumbers, subtractNumbers);
numbersRouter.post('/multiply', validateParametersExist, validateBody, multiplyNumbers);

module.exports = numbersRouter;
