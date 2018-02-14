let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    commentId: {type: Number, require: true, unique: true},
    comment: {type: String, require: true},
    postId: {type: String, require: true},
    userId: {type: String, require: true},
    commentTime: {require: true, type: Date, default: Date.now}
});

const commentModel = module.exports = mongoose.model('comment', commentSchema);
