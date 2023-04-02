const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

// Route for showing all products list
router.get("/", shopController.getIndex);

// Route for getting all the products
router.get("/products", shopController.getProducts);

// Route for getting the detail of selected product
router.get("/product/:productId", shopController.getProductDetail);

// GET Route for move product to the Cart
router.get("/cart", shopController.getCart);

// POST ROute for add product to the CART
router.post("/cart", shopController.postCart);

// POST Route for delete the item from the cart
router.post("/cart-delete-item", shopController.postCartProdDelete);

// Route for orders page
router.get("/orders", shopController.getOrders);

// Route for checkout
router.get("/checkout", shopController.getCheckOut);

module.exports = router;
