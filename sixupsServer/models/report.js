let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const reportSchema = new Schema({
    reportId: {type: Number, require: true},
    reporterUserID: {type: Number, require: true},
    reportedUserID: {type: Number, require: false},
    reportedCommentID: {type: Number, require: false},
    reportSpec: {type: Buffer, require: false},
    replyCreatedAt: {type: Date, require: false, default: Date.now},
});

const ReportModel = module.exports = mongoose.model('report', reportSchema);
