let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const upvotesSchema = new Schema({
    upvoteId: {type: Number, require: true},
    postUpvote: {type: Number, require: true},
    userUpvote: {type: Number, require: false},
    upvoteCreatedAt: {type: Date, require: false, default: Date.now},
    upvoteUpdatedAt: {type: Date, require: false, default: Date.now},
});

const UpvotesModel = module.exports = mongoose.model('upvotes', upvotesSchema);
