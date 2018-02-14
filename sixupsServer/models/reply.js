let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const replySchema = new Schema({
    replyId: {type: Number, require: true},
    content: {type: String, require: true},
    commentId: {type: String, require: true},
    replyUser: {type: Number, require: true},
    replyCreatedAt: {type: Date, require: false, default: Date.now},
    replyUpdatedAt: {type: Date, require: false, default: Date.now},
});

const ReplyModel = module.exports = mongoose.model('reply', replySchema);
