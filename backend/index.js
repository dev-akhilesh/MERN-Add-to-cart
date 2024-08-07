const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

require("dotenv").config();
const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// connect mongodb to our node app
mongoose
    .connect(
        "mongodb+srv://akhileshtakawale703:" +
        process.env.MONGO_PASSWORD +
        "@cluster0.47wrssa.mongodb.net/Cortica_Ecom_DB?retryWrites=true&w=majority"
    ).then((x) => {
        console.log("connected to mongoDB")
    })
    .catch((err) => {
        console.log("Error while connecting to mongoDB")
    });


app.get('/', (req, res) => {
    res.send("Hello, world!");
})


// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});