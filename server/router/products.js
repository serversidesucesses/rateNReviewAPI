var controller = require('../controllers/products.js');
var router = require('express').Router();

router.get('/productdetails', controller.getProductDetails);
router.get('/product/styles', controller.getProductStyles);
router.post('/addToCart', controller.addToCart);

module.exports = router;
