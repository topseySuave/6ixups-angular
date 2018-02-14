let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const postSchema = new Schema({
    postId: {type: Number, require: true},
    content: {type: String, require: true},
    postImage: {type: String, require: true},
    postCat: {type: Number, require: true},
    postCreatedAt: {type: Date, require: false, default: Date.now},
    postUpdatedAt: {type: Date, require: false, default: Date.now},
    postUser: {type: Number, require: false},
    postUpvotes: {type: Number, required: true},
    uniqueId: {type: String, required: true}
});

const PostModel = module.exports = mongoose.model('post', postSchema);
