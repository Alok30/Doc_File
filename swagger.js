const swaggerUi = require('swagger-ui-express');

const express = require('express');

const app = express();
const router = express.Router();
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);
