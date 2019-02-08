// import swagger from 'app/swagger';
require('./models/article');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const swaggerJSDoc = require('swagger-jsdoc');

const logger = require('morgan');
// require('./init/drop-db.js');
require('./init/db.js');

// app.use(express.static(path.join(__dirname, 'public')));

const articleRouter = require('./routes/article');
const pagination = require('./routes/pagination');
const facetType = require('./routes/facet_types');
const UserRegister = require('./routes/register');
const loginUser = require('./routes/login');
const unRegister = require('./routes/unregister');
const userData = require('./routes/user');
const articleSearch = require('./routes/articleSearch');
const accountDetail=require('./routes/userDetail');

const app = express();
// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
  host: 'localhost:3010',
  basePath: '/',
};
// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./**/routes/*.js', 'routes.js'], // pass all in array
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);
// console.log(articleRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(articleRouter);
app.use('/page', pagination);
app.use('/Register', facetType);
app.use('/userRegister', UserRegister);
app.use('/login', loginUser);
app.use('/delete', unRegister);
app.use('/userDetail', userData);
app.use('/search', articleSearch);
app.use('/',accountDetail);
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;

  // render the error page
  res.status(err.status || 500);
  console.log(err);
});
app.listen(3020);
module.exports = app;
