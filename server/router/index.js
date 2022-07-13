const express = require('express');

const rootRouter = express.Router();

const routerQ = require('./questions');

const routerP = require('./products');

rootRouter.use('/questions', routerQ);
// all ticket from /products goes to
// routerP file products.js
rootRouter.use('/products', routerP);

module.exports = rootRouter;
