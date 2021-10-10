const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        minLength: [6, 'Password has a minimum length of 6']
    },
    phone : {
        type: Array,
        required: false
    },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;