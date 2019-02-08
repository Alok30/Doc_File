const mongoose = require('mongoose');


const article = new mongoose.Schema({
  web_url: {
    type: String,
    required: false,
  },
  snippet: {
    type: String,
    required: false,
  },
  source: {
    type: String,

  },
  headline: {
    main: String,
    kicker: String,
    content_kicker: String,
    print_headline: String,
    name: String,
    seo: String,
    sub: String,
  },
  pub_date: {
    type: Date,
  },
  document_type: {
    type: String,
  },
  news_desk: {
    type: String,
  },
  type_of_material: {
    type: String,
  },
  uri: {
    type: String,
  },

  word_count: {
    type: Number,
  },
  multimedia: [{
    caption: String,
    credit: String,
    crop_name: String,
    height: Number,
    rank: Number,
    subtype: String,
    type: String,
    url: String,
    width: Number,
  }],
  keywords: [
    {
      name: String,
      value: String,
      rank: Number,
      major: String,
    },
  ],

  byline: {
    organization: String,
    original: String,
    person:
   [{
     firstname: String,
     lastname: String,
     middlename: String,
     organization: String,
     qualifier: String,
     rank: Number,
     role: String,
     title: String,

   }],
  },
});

// creates a Product model (class)
mongoose.model('Article', article);
