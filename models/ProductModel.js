const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: false,
    },
    category : {
        type: String,
        required: true
    },
    quantity : {
        type: Number,
        required: false
    },
    bestseller : {
        type: Boolean,
        required: false
    },
    productURL : {
        type: String,
        required: false
    }
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;