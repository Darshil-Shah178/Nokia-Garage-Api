// ./models/booking.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    ownerUserId: String,
    url: { type: String, required: true},
    name:{ type: String, required: true},
    dateTimeFrom: Date,
    dateTimeTo: Date
});

module.exports = mongoose.model('Booking1', BookingSchema);