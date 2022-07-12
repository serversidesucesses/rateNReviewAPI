const router = require('express').Router();
const controller = require('../controllers/products');

// different route needed
// get product details
router.get('/productdetails', controller.getProductDetails);

router.get('/product/styles', controller.getProductStyles);

router.post('/addToCart', controller.addToCart);

// router.post('/clientClick', controller.clientClick);

module.exports = router;
