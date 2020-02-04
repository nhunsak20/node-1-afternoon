const express = require('express'),
    getProducts = require('./getProducts')
    app = express(),
    port = 4040;

app.use(express.json())

app.get('/api/products', getProducts.getProducts)
app.get('/api/product/:id', getProducts.getProductID)

app.listen(port, () => console.log(`Server running on ${port}`))