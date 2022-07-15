// require('dotenv').config();

// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.json());
// app.use('static', express.static(path.join(__dirname, '../client/dist')));

// // Add routes here

// const { reviewRouter } = require('./router/products');

// app.use('/reviews', r);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT);
// console.log(`Server listening at http://localhost:${PORT}`);

require('dotenv').config();

const express = require('express');
const path = require('path');
const router = require('./router');
const sessionHandler = require('./middleware/session-handler');
const logger = require('./middleware/logger');

const app = express();

app.use(sessionHandler);
app.use(logger);
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// all routes go to router folder index.js
app.use('/', router);

// River routes for product overview
// const routerProducts = require('./router/products.js');
// const routerReview = require('./router/reviews.js');

// // const routers = require('./router');
// // app.use('/', routers);
// // console.log(require('./router'));
// // console.log(routerProducts);
// // console.log(routerReview);

// // River routes end
app.use(require('./router/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
