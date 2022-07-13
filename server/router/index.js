const express = require('express');

const router = express.Router();

router.use('/products', require('./products.js'));

router.use('/reviews', require('./reviews.js'));

module.exports = router;
