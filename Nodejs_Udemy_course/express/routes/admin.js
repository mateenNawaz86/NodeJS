const express = require("express");
const productController = require("../controllers/products");

const router = express.Router();

// Route for return a get add product form page
router.get("/add-product", productController.getAddProduct);

// Route for posting a new product to existing list
router.post("/product", productController.postAddProduct);

// exports all routes
module.exports = router;
