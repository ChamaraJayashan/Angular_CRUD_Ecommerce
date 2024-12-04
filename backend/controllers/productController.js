const db = require('../config/db');

exports.getAllProducts = (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ data: results });
    });
};

exports.getAllCategories = (req, res) => {
    const query = 'SELECT * FROM categories';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ data: results });
    });
};

exports.createProduct = (req, res) => {
    const product = req.body;
    const query = `
        INSERT INTO products (productName, productPrice, productShortName, productDescription, deliveryTimeSpan, productImageUrl)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [
        product.productName,
        product.productPrice,
        product.productShortName,
        product.productDescription,
        product.deliveryTimeSpan,
        product.productImageUrl
    ];

    db.query(query, values, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Product created successfully', productId: results.insertId });
    });
};
exports.deleteProductById = (req, res) => {
    const {id}  = req.params;
    const query = 'DELETE FROM products WHERE productId=?';
    db.query(query,[id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ data: results });
    });
};

