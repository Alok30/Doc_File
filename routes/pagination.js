const express = require('express');
const mongoose = require('mongoose');

const mongoOp = mongoose.model('Article');
require('../init/db');

// const app = express();
const router = express.Router();

router.get('/',(req, res)=> {
  // const radix : false;


  const pageNo = parseInt(req.query.pageNo);
  const size = parseInt(req.query.size);
  console.log(pageNo);
  console.log(size);
  // mconst query = {};
  if (pageNo < 0 || pageNo === 0) {
    // resp = { error: true, message: 'invalid page number, should start with 1' };
    return res.json({
      message: 'Error in page and size',
    });
  }
  // query.skip = sizePage * (page - 1);
  // query.limit = sizePage;
  // Find some documents
  mongoOp.find({}, null, { skip: size * (pageNo - 1), limit: size }, (err, data) => {
    // Mongo command to fetch all data from collection.
    if (err) {
      console.log('error');
      return;
    }
    res.status(200).json(data);
  });
});

module.exports = router;
