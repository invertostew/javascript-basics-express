const express = require('express');
const { validateNumbers, validateParametersExist, validateBody } = require('../middleware/numbers');
const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} = require('../controllers/numbers');

const numbersRouter = express.Router();

numbersRouter.get('/add/:num1/and/:num2', validateNumbers, addNumbers);
numbersRouter.get('/subtract/:num1/from/:num2', validateNumbers, subtractNumbers);
numbersRouter.post('/multiply', validateParametersExist, validateBody, multiplyNumbers);
numbersRouter.post('/divide', validateParametersExist, validateBody, divideNumbers);

module.exports = numbersRouter;
