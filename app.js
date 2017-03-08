const express = require('express');
const app = express();
const r = require('./routes/storeRawMail');

app.use('/', r);

module.exports = app;