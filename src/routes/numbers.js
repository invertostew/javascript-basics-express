const express = require('express');
const {
  validateGetParams,
  validatePostParams,
  validatePostBody,
} = require('../middleware/numbers');
const {
  addController,
  subtractController,
  multiplyController,
  divideController,
  remainderController,
} = require('../controllers/numbers');

const numbersRouter = express.Router();

numbersRouter.get('/add/:num1/and/:num2', validateGetParams, addController);
numbersRouter.get('/subtract/:num1/from/:num2', validateGetParams, subtractController);
numbersRouter.post('/multiply', validatePostParams, validatePostBody, multiplyController);
numbersRouter.post('/divide', validatePostParams, validatePostBody, divideController);
numbersRouter.post('/remainder', validatePostParams, validatePostBody, remainderController);

module.exports = numbersRouter;
