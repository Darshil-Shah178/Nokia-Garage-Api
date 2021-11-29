// ./models/user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: { type: String, required: true},
    firstName:{ type: String, required: true},
    lastName: { type: String, required: true},
    passwordHash: { type: String, required: true},
    // passwordSalt: { type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);