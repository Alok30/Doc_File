const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const Articles = mongoose.model('Article');
require('../init/db');


/**
 * @swagger
 * definition:
 *   users:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       age:
 *         type: integer
 *
 */


/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */

router.get('/display', (req, res) => {
  Articles.find((error, docs) => {
    if (error) {
      res.status(400).json({
        message: 'Bad request',
      });
    }
    res.status(200).json(docs);
  });
});

router.get('/name', (req, res) => {
  res.end('alok');
});

router.get('/display/:begin_date/:end_date', (req, res) => {
  const beginDate = req.params.begin_date;
  const endDate = req.params.end_date;
  Articles.find({
    pub_date: {
      $gte: beginDate,
      $lt: endDate,
    },
  }, (error, docs) => {
    if (error) {
      console.log('Error');
      return;
    }
    res.status(200).json(docs);
  });
});


module.exports = router;
