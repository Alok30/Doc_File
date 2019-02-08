require('../models/users');
const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');

router.post('/', async (req, res) => {
  const email = req.body.email;
  console.log(email);
  await User.findOne({ email }, 'email -_id fullName', (err, data) => {
    if (err) {
      res.json({
        message: err.message,
      });
    }
    if (data) {
      res.json({
        message: 'you are already an user',
      });
    } else {
      const bodyobj = new User(req.body);
      bodyobj.save((error, savedData) => {
        if (error) {
          res.json({
            message: `you have no entered ${error.message}`,
          });
          return;
        }
        res.status(201).json({
          message: `The saved data is ${savedData}`,
        });
      });
    }
  });
});

module.exports = router;
