const express = require('express');
const { getAllProducts, getAllCategories, createProduct, deleteProductById } = require('../controllers/productController');

const router = express.Router();

router.get('/GetAllProducts', getAllProducts);
router.get('/GetAllCategory', getAllCategories);
router.post('/CreateProduct', createProduct);

module.exports = router;
