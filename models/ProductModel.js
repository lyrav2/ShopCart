const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true,
        min: [0, 'Must be greater than 0']
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
        required: false,
        default: 0
    },
    bestseller : {
        type: Boolean,
        required: true
    },
    productURL : {
        type: String,
        required: false
    }
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;