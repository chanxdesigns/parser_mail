const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = require('../models/Schema');

router.get('/raw', function (req, res) {
    const Mail = mongoose.model('rawmails', Schema.rawMail);
    Mail.find().exec(function (err, data) {
        console.log(data);
        res.send(data);
    });
})

module.exports = router;