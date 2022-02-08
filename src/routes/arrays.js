const express = require('express');

const {
  elementAtController,
  toStringController,
  appendController,
  startsWithVowelController,
  removeElementController,
} = require('../controllers/arrays');

const arraysRouter = express.Router();

arraysRouter.post('/element-at-index/:index', elementAtController);
arraysRouter.post('/to-string', toStringController);
arraysRouter.post('/append', appendController);
arraysRouter.post('/starts-with-vowel', startsWithVowelController);
arraysRouter.post('/remove-element', removeElementController);

module.exports = arraysRouter;
