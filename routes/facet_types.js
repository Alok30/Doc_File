const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const Articles = mongoose.model('Article');
require('../init/db');

router.post('/', (req, res) => {
  const facet = req.body;

  if (!req.body) { // false, undefined, null, '',
    res.json({
      message: 'Empty',
    });
    return;
  }

  // add the product (DB query)
  const facetObj = new Articles(facet);
  facetObj.save((error, savedfacet) => {
    console.log(facetObj);
    console.log(savedfacet);
    if (error) {
      res.json({
        message: `Some error occured saving new facet_types${error.message}`,
      });
      return;
    }
    res.status(201).json(savedfacet);
  });
});
module.exports = router;
