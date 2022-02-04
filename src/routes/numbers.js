const express = require('express');
const validateNumbers = require('../middleware/numbers');
const { addNumbers } = require('../controllers/numbers');

const numbersRouter = express.Router();

numbersRouter.get('/add/:num1/and/:num2', validateNumbers, addNumbers);

module.exports = numbersRouter;
