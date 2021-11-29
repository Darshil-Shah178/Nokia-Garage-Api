const express = require('express');
const router = express.Router();

const User = require('../models/user');
const bcrypt = require('bcrypt');

// get a list of users from db
router.get('/users', (req, res, next) => {
    User.find({})
    .then( user => res.send(user) );
});


// add a new hotel to db
router.post('/users', async (req, res, next) => {
    try {
        const user = req.body;
        user.passwordHash = await bcrypt.hash(user.password,10);
        const dbuser = await User.create(user);
        res.send(dbuser);
    } catch (e){
        console.error('post user',e);
        next;
    }
});

 // login route
 router.post("/login", async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.passwordHash);
      if (validPassword) {
        res.status(200).json({ message: "Valid password" });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  });

//update a hotel in db
router.put('/users/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        User.findOne({_id: req.params.id})
        .then( user => {
            res.send(user);
        });
    });
});

//delete a hotel form db
router.delete('/users/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id})
    .then( user => {
        res.send(user);
    });
});

module.exports = router;