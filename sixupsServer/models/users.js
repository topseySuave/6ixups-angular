let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    userUniquID: {type: String, require: true, lowercase: true},
    username: {type: String, require: true, lowercase: true, unique: true},
    userEmail: {type: String, require: true, unique: true},
    userPass: {type: String, require: true},
    userImg: {type: String, require: false},
    userLevel: {type: Boolean, require: false}
});

userSchema.pre('save', (next) => {
    let user = this;
    let salt = bcrypt.genSalt(8);
    bcrypt.hash(user.password, salt, (err, hash) => {
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

const UserModel = module.exports = mongoose.model('users', userSchema);
