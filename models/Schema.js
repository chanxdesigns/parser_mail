const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    rawMail: new Schema({
        data: Schema.Types.Mixed
    })
}