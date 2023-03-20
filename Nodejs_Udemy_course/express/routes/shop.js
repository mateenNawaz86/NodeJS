const express = require("express");
const productController = require("../controllers/products");

const router = express.Router();

// Route for showing all products list
router.get("/", productController.getProducts);

module.exports = router;
