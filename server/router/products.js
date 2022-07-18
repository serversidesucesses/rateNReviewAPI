const router = require('express').Router();
const controller = require('../controllers');

// different route needed
// get product details
router.get('/productdetails', controller.products.getProductDetails);

router.get('/product/styles', controller.products.getProductStyles);

//router.post('/click', controller.products.handleClick);
router.get('/getFromCart', controller.getFromCart)
router.post('/addToCart', controller.addToCart);

// router.post('/clientClick', controller.clientClick);

module.exports = router;
