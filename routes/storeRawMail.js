const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = require('../models/Schema');

const parsebody = bodyParser.urlencoded({extended: true, limit: '5mb'});

/**
 * Raw Mail Body Stored in Mongo DB
 */
router.post('/raw', parsebody, function (req, res) {
    //console.log(req.body);
    const Mail = mongoose.model('RawMail', Schema.rawMail);
    const raw = new Mail({
        data: req.body
    })
    raw.save(function (err, data) {
        console.log('done saved: ' + data);
        res.send('Ok');
    })
});

// router.get('/', function (req, res) {
//     res.send("<form method='post' action='/raw'><input type='text' name='user'><input type='submit' value='Submit'></form>");
// })

module.exports = router;