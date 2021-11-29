const express = require('express');
const router = express.Router();

const Booking = require('../models/booking');

// get a list of bookings from db
router.get('/bookings', (req, res, next) => {
    Booking.find({hotel: req.body.hotel})
    .then( rooms => res.send(room) );
});

// add a new booking to db
router.post('/bookings',async (req, res, next) => {
    console.log('body', req.body);
    try {
        const booking = await Booking.create(req.body);
        console.log('create whaever',booking);
        res.send(booking);
    } catch (e){
        console.log('post booking error', e);
        next
    }
});

//update a booking in db
router.put('/bookings/:id', (req, res, next) => {
    Booking.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Booking.findOne({_id: req.params.id})
        .then( booking => {
            res.send(booking);
        });
    });
});

//delete a booking form db
router.delete('/bookings/:id', (req, res, next) => {
    Booking.findByIdAndRemove({_id: req.params.id})
    .then( booking => {
        res.send(booking);
    });
});

module.exports = router;