const express = require('express');
const {
  validateGetParams,
  validatePostParams,
  validatePostBody,
} = require('../middleware/numbers');
const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  remainderNumbers,
} = require('../controllers/numbers');

const numbersRouter = express.Router();

numbersRouter.get('/add/:num1/and/:num2', validateGetParams, addNumbers);
numbersRouter.get('/subtract/:num1/from/:num2', validateGetParams, subtractNumbers);
numbersRouter.post('/multiply', validatePostParams, validatePostBody, multiplyNumbers);
numbersRouter.post('/divide', validatePostParams, validatePostBody, divideNumbers);
numbersRouter.post('/remainder', validatePostParams, validatePostBody, remainderNumbers);

module.exports = numbersRouter;
