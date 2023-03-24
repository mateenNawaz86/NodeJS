const express = require("express");
const shopController = require("../controllers/shop");

const router = express.Router();

// Route for showing all products list
router.get("/", shopController.getIndex);

// Route for getting all the products
router.get("/products", shopController.getProducts);

// Route for move on to the Cart
router.get("/cart", shopController.getCart);

// Route for checkout
router.get("/checkout", shopController.getCheckOut);

module.exports = router;
