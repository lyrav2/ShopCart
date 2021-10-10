const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userController = require("./controllers/UserController.js");
const productController = require("./controllers/ProductController.js");

if (process.env.NODE_ENV!="production") {
    require('dotenv').config({ path: 'config/keys.env'});
}

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/products", productController);

app.listen(process.env.PORT,() => {
    console.log(`Web server is up and running on ${process.env.PORT}`);

    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    })
})