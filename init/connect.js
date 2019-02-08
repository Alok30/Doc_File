require('../models/users');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Article');
mongoose.connection.on('connected', () => {
  console.log('connected to the DB');
});


mongoose.connection.on('error', (error) => {
  console.error('error on trying to connect to DB : ', error.message);
});
