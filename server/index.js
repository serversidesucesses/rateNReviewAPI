require('dotenv').config();

const express = require('express');
const path = require('path');
const router = require('./router');
const sessionHandler = require('./middleware/session-handler');
const compression = require('compression');
const logger = require('./middleware/logger');
const expressStaticGzip = require("express-static-gzip");
const axios = require('axios');

const app = express();
app.use(compression());
app.use(sessionHandler);
// app.use(logger);
app.use(express.json());
app.use(expressStaticGzip(path.join(__dirname, '../client/dist'), {
  enableBrotli: true
})
);

// all routes go to router folder index.js
app.all('/*', (req, res) => {
  axios({
    url: req.url,
    method: req.method,
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp',
    data: req.body,
    headers: {
      Authorization: process.env.Token,
      'Accept-Encoding': 'gzip, compress, br',
    },
  })
  .then((response) => {
    res.status(response.status).send(response.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
} )

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
