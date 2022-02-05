const express = require('express');
const { elementAt, arrayToString, arrayAppend } = require('../controllers/arrays');

const arraysRouter = express.Router();

arraysRouter.post('/element-at-index/:index', elementAt);
arraysRouter.post('/to-string', arrayToString);
arraysRouter.post('/append', arrayAppend);

module.exports = arraysRouter;
