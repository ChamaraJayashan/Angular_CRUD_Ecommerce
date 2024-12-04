const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'bigbasket'
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL database');
});

app.get('/api/BigBasket/GetAllProducts', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error fetching products:", err);
            res.status(500).send({ message: 'Error fetching products', error: err });
        } else {
            res.send({ data: result });
        }
    });
});

app.delete('/api/BigBasket/DeleteProductById/:id', (req, res) => {
    const productId = req.params.id; 
    if (!productId) {
      return res.status(400).send({ message: 'Product ID is required' });
    }
    
    const sql = 'DELETE FROM products WHERE productId = ?';
    db.query(sql, [productId], (err, result) => {
      if (err) {
        console.error('Error deleting product:', err);
        return res.status(500).send({ result: false, message: 'Error deleting product' });
      }
  
      if (result.affectedRows > 0) {
        res.send({ result: true, message: 'Product deleted successfully' });
      } else {
        res.status(404).send({ result: false, message: 'Product not found' });
      }
    });
  });

app.get('/api/BigBasket/GetAllCategory', (req, res) => {
    res.send({ data: [{ categoryId: 1, name: 'Fruits' }, { categoryId: 2, name: 'Vegetables' }] });
});

 app.post('/api/BigBasket/CreateProduct', (req, res) => {
    const {
        
        productName,
        productPrice,
        productShortName,
        productDescription,
        createdDate,
        deliveryTimeSpan,
        categoryId,
        productImageUrl
    } = req.body;

    const sql = `INSERT INTO products 
        (productName, productPrice, productShortName, productDescription, createdDate, deliveryTimeSpan, categoryId, productImageUrl) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
        sql,
        [productName, productPrice, productShortName, productDescription, createdDate, deliveryTimeSpan, categoryId, productImageUrl],
        (err, result) => {
            if (err) {
                console.error("Error inserting product:", err);
                res.status(500).send({ message: 'Error inserting product', error: err });
            } else {
                res.send({ result: true, productId: result.insertId });
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
