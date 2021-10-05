const express = require('express');
const router = express.Router();

const productService = require("../services/ProductService.js");

// routes
router.get("/", productService.getProducts);
router.get("/:id", productService.getProduct);
router.get("/category", productService.getCategory);
router.put("/:id", productService.updateProduct);
router.post("/", productService.createProduct);
router.delete("/:id", productService.deleteProduct);

module.exports = router;