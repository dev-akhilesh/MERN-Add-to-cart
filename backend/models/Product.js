const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    category: String,
    price: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
