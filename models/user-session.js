// ./models/user-session.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
    sessionId: String,
    userId: String
});

module.exports = mongoose.model('UserSession', UserSessionSchema);

