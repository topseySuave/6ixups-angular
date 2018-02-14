let mongoose = require('mongoose');

const Schema = mongoose.Schema;
const categorySchema = new Schema({
    categoryId: {type: Number, require: true},
    categoryName: {type: String, require: true, lowercase: true, unique: true},
    categoryLink: {type: String, require: true},
    catImg: {type: String, require: true}
});

const categoryModel = module.exports = mongoose.model('category', categorySchema);
