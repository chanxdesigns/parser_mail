const express = require('express');
const app = express();
const mongoose = require('mongoose');
const storeRaw = require('./routes/storeRawMail');

/**
 * Connect MongoDB
 */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017');

/**
 * Use Express Router
 */
app.use('/store', storeRaw);

module.exports = app;