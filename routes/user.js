console.log('inside user');
const express = require('express');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
// const User=mongoose.model('User')
const router = express.Router();

router.get('/', (req, res) => {
  const authHeader = req.get('Authorization') || req.get('authorization');
  if (!authHeader) {
    res.status(401).json({
      message: 'not authorized',
    });
  }
  const token = authHeader.split('')[1];
  // jwt.verify(token, process.env.SECRET, (error, claims) => {
  //   // if (error || claims.isAdmin !== true) {
  //   //   res.status(400).json({
  //   //     message: 'error',
  //   //   });
  //   }
  User.findOne({}, (error, data) => {
    if (error) {
      res.status(400);
    }
    res.status(200).json(data);
  });
});


module.exports = router;
