const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')


router.use('/addproduct',productsController.getAddProduct )
router.post('/product',productsController.postAddProduct)

module.exports = router;
