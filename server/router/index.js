const express = require('express');

const rootRouter = express.Router();

const routerQ = require('./questions');

const routerP = require('./products');

rootRouter.use('/questions', routerQ);
rootRouter.use('/products', routerP);

module.exports = rootRouter;
