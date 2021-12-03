const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// get a list of users from db
router.get('/users', async (req, res, next) => {

  try {
    const user = await User.find({});
    res.send(user);
  } catch (e) {
    console.error('post user', e);
    next;
  }
});

// get User detailes from db
router.get('/users/:id', async (req, res, next) => {

  try {
    const user = await User.findById({ _id: req.params.id });
    res.send(user);
  } catch (e) {
    console.error('post user', e);
    next;
  }
});


// add a new user to db
router.post('/users', async (req, res, next) => {
  try {
    const user = req.body;
    user.passwordHash = await bcrypt.hash(user.password, 10);
    const dbuser = await User.create(user);
    res.send(dbuser);
  } catch (e) {
    console.error('post user', e);
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
      res.status(200).json({ message: "Valid password", _id: user.id });
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
});

//update a user in db
router.put('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.send(user);
  } catch (e) {
    console.error('post user', e);
    next;
  }
});


//delete a user form db
router.delete('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndRemove({ _id: req.params.id });
    res.send(user);
  } catch (e) {
    console.error('post user', e);
    next;
  }
});

module.exports = router;