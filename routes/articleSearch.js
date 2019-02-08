const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
require('../models/article');

const Articles = mongoose.model('Article');
require('../init/db');


router.get('/:sectionName', (req, res) => {
  const articleName = req.params.sectionName;
  console.log(articleName);
  Articles.find({ 'source': articleName }, (error, data) => {
    if (error) {
      res.status(400).json({
        message: error.message,
      });
    }
    // console.log(document_type);
    res.status(200).json(data);
  });
});


module.exports = router;
