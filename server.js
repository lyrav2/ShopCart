const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userController = require("./controllers/UserController.js");
const productController = require("./controllers/ProductController.js");

var cors = require('cors');

if (process.env.NODE_ENV!="production") {
    require('dotenv').config({ path: 'config/keys.env'});
}

const app = express();

const corsOptionsDelegate = function(req, callback) {
    const allowlist = ['http://localhost:3000', 'http://127.0.0.1:3000']
    let corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = {origin: true}
    } else {
        corsOptions = {origin: false}
    }
    callback(null, corsOptions)
}

app.use(express.json());
app.use(cors(corsOptionsDelegate));

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