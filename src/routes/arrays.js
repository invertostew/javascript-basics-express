const express = require('express');
const {
  elementAt,
  arrayToString,
  arrayAppend,
  startsWithVowel,
  removeElement,
} = require('../controllers/arrays');

const arraysRouter = express.Router();

arraysRouter.post('/element-at-index/:index', elementAt);
arraysRouter.post('/to-string', arrayToString);
arraysRouter.post('/append', arrayAppend);
arraysRouter.post('/starts-with-vowel', startsWithVowel);
arraysRouter.post('/remove-element', removeElement);

module.exports = arraysRouter;
