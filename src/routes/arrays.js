const express = require('express');
const { elementAt } = require('../controllers/arrays');

const arraysRouter = express.Router();

arraysRouter.post('/element-at-index/:index', elementAt);

module.exports = arraysRouter;
