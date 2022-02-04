const express = require('express');
const validateNumbers = require('../middleware/numbers');
const { addNumbers, subtractNumbers } = require('../controllers/numbers');

const numbersRouter = express.Router();

numbersRouter.get('/add/:num1/and/:num2', validateNumbers, addNumbers);
numbersRouter.get('/subtract/:num1/from/:num2', validateNumbers, subtractNumbers);

module.exports = numbersRouter;
