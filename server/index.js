require('dotenv').config();

const express = require('express');
const path = require('path');
const router = require('./router');
const sessionHandler = require('./middleware/session-handler');
const logger = require('./middleware/logger');
const expressStaticGzip = require("express-static-gzip");
const app = express();

app.use(sessionHandler);
// app.use(logger);
app.use(express.json());
app.use(expressStaticGzip(path.join(__dirname, '../client/dist'), {
  enableBrotli: true
})
);

// all routes go to router folder index.js
app.use('/', router);


// // River routes end
app.use(require('./router/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
