const express = require('express');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', (req, res) => {
  const authorizationHeader = req.get('Authorization') || req.get('authorization');
  if (!authorizationHeader) {
    res.status(401).json({
      message: 'You are not Authorized',
    });
    return;
  }
  const token = authorizationHeader.split(' ')[1];
  jwt.verify(token, process.env.SECRET, (error, claims) => {
    if (error) {
      res.status(401).json({
        message: 'You are not Authorized',
      });
      return;
    }
    // console.log(claims);
    User.findOneAndDelete({ email: claims.email }, (error, doc) => {
      if (error) {
        res.status(404).json({
          message: 'Requested document not found',
        });
        return;
      }
      console.log('doc ---> ', doc);
      res.status(200).json({
        message: 'You have deleted your account ------>>>!',
      });
    });
  });
});

module.exports = router;
