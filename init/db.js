require('../models/article');
// require('../models/users');
const mongoose = require('mongoose');
const data = require('../init/load.json');

const Article = mongoose.model('Article');
mongoose.connect('mongodb://localhost:27017/Article');
mongoose.connection.on('connected', () => {
  console.log('connected to the DB');
  // loadData();
});

mongoose.connection.on('error', (error) => {
  console.error('error on trying to connect to DB : ', error.message);
});

// function loadData() {
//   data.response.docs.forEach((article) => {
//     const articleObj = new Article(article);
//     articleObj.save((error, savedArticle) => {
//       if (error) {
//         console.error(`Some error occured  ${error.message}`);
//         return;
//       }

//       console.log(`Article name = ${savedArticle.snippet} has been saved with id`);
//     });
//   });
// }
