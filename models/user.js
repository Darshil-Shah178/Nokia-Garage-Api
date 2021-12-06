const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    passwordHash: { type: String, required: true },
})

module.exports = mongoose.model('User', UserSchema)
