let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const notificationSchema = new Schema({
    notifyId: {type: Number, require: true, unique: true},
    notifySenderId: {type: String, require: true},
    notifyReceiverId: {type: String, require: true},
    notifyPostId: {type: String, require: true},
    notifySpecs: {type: String, require: true},
    notifySeenUnseen: {type: Number, require: true},
    notifyDateTime: {type: Date, default: Date.now}
});

const notificationModel = module.exports = mongoose.model('notification', notificationSchema);
