const productModel = require("../models/ProductModel.js");

// endpoint to get all products, get all bestseller products, and retrieves specific categories
exports.getProducts = (req, res) => {
    if (req.query.bestseller) {
        productModel.find()
        .where("bestseller").equals(true)
        .then((products) => {
            res.json({
                message: `A list of the bestselling products`,
                data: products,
                totalProducts: products.length
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: ${err}`
            })
        })
    } else if (req.query.category){
        productModel.find()
        .where("category").equals(req.query.category)
        .then((products) => {
            res.json({
                message: `A list of products from all items in ${req.query.category}`,
                data: products
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: `Error: ${err}`
            })
        })
    }
    else {
        productModel.find()
        .then(products => {
            res.json({
                message: "A list of all the products",
                data: products,
                totalProducts: products.length
            })
        })
        .catch(err => {
            res.status(500).json({
                message: `Error: ${err}`
            })
        })
    }
}

// endpoint to get one product by id
exports.getProduct = (req, res) => {
    productModel.findById(req.params.id)
    .then((product) => {
        if (product) {
            res.json({
                message: `Found product with the ID ${req.params.id}`,
                data: product
            })
        } else {
            res.status(404).json({
                message: `No product was found with the ID ${req.params.id}`
            })
        }
    })
    .catch((err) => {
        res.status(500).json({
            message: `Error: ${err}`
        })
    })
}

// endpoint to create product
exports.createProduct = (req, res) => {
    const product = new productModel(req.body);

    product.save(function(error) {
        assert.equal(error.errors['price'].message,
        'Must be greater than 0');
    })
    .then((newProduct) => {
        res.json({
            message: "The product was created successfully.",
            data: newProduct
        })
    })
    .catch((err) => {
        res.status(500).json({
            message: `Error: ${err}`
        })
    })
}

// endpoint to get all product categorie
exports.getCategory = (req, res) => {
 productModel.find()
 .then(product => {
     if (product) {
         res.json({
             message: `A list of all product categories`,
             data: product.category
         })
     } else {
         res.status(500).json({
             message: `There were no applicable products.`
         })
     }
 })
}

// endpoint to update product by id
exports.updateProduct = (req, res) => {
    productModel.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then(product => {
        if (product) {
            res.json({
                message: `The product, ${req.params.name}, with the id ${req.params.id} was updated.`,
                data: product
            })
        } else {
            res.status(500).json({
                message: `Product with ID ${req.params.id} was not found.`
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: `Error: ${err}`
        })
    })
}

// endpoint to delete product by id
exports.deleteProduct = (req, res) => {
    productModel.findByIdAndDelete(req.params.id)
    .then((product) => {
        if (product) {
            res.json({
                message: `The product, ${req.params.name}, with the ID ${req.params.id} was deleted.`
            })
        } else {
            res.status(404).json({
                message: `The product with ID ${req.params.id} was not found.`
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: `Error: ${err}`
        })
    })
}