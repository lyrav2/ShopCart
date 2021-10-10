const userModel = require("../models/UserModel.js");
const bcrypt = require("bcrypt");

exports.getUser = (req, res) => {
    userModel.findById(req.params.id)
    .then((user) => {
        if(user) {
            res.json({
                message: `Found user with the ID ${req.params.id}`,
                data: user
            })
        } else {
            res.status(404).json({
                message: `No user was found with the ID ${req.params.id}`
            })
        }
    })
    .catch((err) => {
        res.status(500).json({
            message: `Error: ${err}`
        })
    })
}

exports.createUser = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = new userModel(req.body);

    user.save(function(error) {
        assert.equal(error.errors['password'].message,
        'Password has a minimum length of 6');
    })
    .then((newUser) => {
        res.json({
            message: "The user was registered successfully.",
            data : newUser
        })
    })
    .catch((err) => {
        res.status(500).json({
            message: `Error: ${err}`,
        })
    })
};

// endpoint to delete user by ID
exports.deleteUser = (req, res) => {
    userModel.findByIdAndDelete(req.params.id)
    .then((user) => {
        if (user) {
            res.json({
                message: `The user with the ID ${req.params.id} was deleted.`
            })
        } else {
            res.status(404).json({
                message: `The user with ID ${req.params.id} was not found.`
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: `Error: ${err}`
        })
    })
}