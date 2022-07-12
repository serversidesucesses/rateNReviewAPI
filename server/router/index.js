// exports.routerProducts = require('./products.js');
// exports.routerReview = require('./reviews.js');

const express = require('express');

const router = express.Router();

router.use('/products', require('./products.js'));

router.use('/reviews', require('./reviews.js'));

module.exports = router;
// exports.router = (req, res, next) => {
//   routerProducts = require('./product.js');
//   routerReview = require('./reviews.js');

//   next();
// }