let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const sessionSchema = new Schema({
    sessId: {type: Number, require: true},
    userId: {type: Number, require: true},
    userKey: {type: String, require: true},
    token: {type: String, require: true},
    used: {type: Number, required: false},
    expiry: {type: Date, require: true, default: Date.now},
});

const SessionModel = module.exports = mongoose.model('session', sessionSchema);
