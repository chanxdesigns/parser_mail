const express = require('express');
const app = express();
const mongoose = require('mongoose');
const storeRaw = require('./routes/storeRawMail');
const retrieve = require('./routes/retrieveMail');

/**
 * Connect MongoDB
 */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017');

/**----------------------------------
 | Use Express Router
 |---------------------------------*/

/**
 * Mail Storage Route Middleware
 */
app.use('/store', storeRaw);

/**
 * Mail Retrieval Route Middleware
 */
app.use('/get', retrieve);

module.exports = app;