const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const parsebody = bodyParser.urlencoded({extended: true});

/**
 * Raw Mail Body Stored in Mongo DB
 */
router.post('/store/raw', parsebody, function (req, res) {
    console.log(req.body);
    res.status(200);
});

router.get('/', function (req, res) {
    res.send("<form method='post' action='/store/raw'><input type='text' name='user'><input type='submit' value='Submit'></form>");
})

module.exports = router;