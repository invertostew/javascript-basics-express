const express = require('express');
const stringsRouter = require('./routes/strings');

const app = express();

app.use('/strings', stringsRouter);

module.exports = app;
