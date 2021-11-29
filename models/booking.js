// ./models/booking.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
    ownerUserId: String,
    url: { type: String, required: true},
    name:{ type: String, required: true},
    dateTimeFrom: Date,
    dateTimeTo: Date
});

module.exports = mongoose.model('Booking1', BookingSchema);