const express = require('express')

const router = express.Router()
const Booking = require('../models/booking')
const importEquipments = require('../equipment.json')
const importArticles = require('../articles.json')

// get a list of bookings from db
router.get('/equipments', (req, res, next) => {
    res.send(importEquipments)
})
// get a list of bookings from db
router.get('/articles', (req, res, next) => {
    res.send(importArticles)
})

// get a list of bookings from db
router.get('/bookings', async (req, res, next) => {
    try {
        const booking = await Booking.find({})
        res.send(booking)
    } catch {
        console.log('get booking error', e)
        next
    }
})

//get a booking by id form db
router.get('/bookings/:id', async (req, res, next) => {
    try {
        const booking = await Booking.findById({ _id: req.params.id })
        res.send(booking)
    } catch (e) {
        console.error('Get User booking ID ', e)
        next
    }
})

// get a list of Users bookings from db
router.get('/bookings/users/:ownerUserId', async (req, res, next) => {
    try {
        const booking = await Booking.find({
            ownerUserId: req.params.ownerUserId,
        })
        res.send(booking)
    } catch (e) {
        console.log('get user booking error', e)
        next
    }
})

// add a new booking to db
router.post('/bookings', async (req, res, next) => {
    try {
        const startDate = new Date(req.body.dateTimeFrom)
        startDate.setDate(startDate.getDate())
        const endDate = new Date(req.body.dateTimeTo)
        endDate.setDate(endDate.getDate())
        const checkBooking = await Booking.find({
            $or: [
                {
                    $and: [
                        { dateTimeFrom: { $gte: startDate } },
                        { dateTimeFrom: { $lte: endDate } },
                    ],
                },
                {
                    dateTimeFrom: { $lte: startDate },
                    dateTimeTo: { $gte: startDate },
                },
            ],
        }).exec()
        if (checkBooking && checkBooking.length > 0) {
            res.status(200).json({ message: 'This time is already booked' })
        } else {
            req.body.dateTimeFrom = startDate
            req.body.dateTimeTo = endDate
            const booking = await Booking.create(req.body)
            console.log('Create New Booking', booking)
            res.send(booking)
        }
        console.log(checkBooking)
    } catch (e) {
        console.log('post booking error', e)
        next
    }
})

//update a booking in db
router.put('/bookings/:id', async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            { _id: req.params.id },
            req.body
        )
        res.send(booking)
    } catch (e) {
        console.error('edit booking error', e)
        next
    }
})

//delete a booking form db
router.delete('/bookings/:id', async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndRemove({ _id: req.params.id })
        res.send(booking)
    } catch (e) {
        console.error('delete booking error', e)
        next
    }
})

module.exports = router
