const express = require('express');

const rootRouter = express.Router();

const routerQ = require('./questions');
const routerP = require('./products');
const routerR = require('./reviews');

rootRouter.use('/questions', routerQ);
rootRouter.use('/products', routerP);
rootRouter.use('/reviews', routerR);

module.exports = rootRouter;
