const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

// Route for return a get add product form page
router.get("/add-product", adminController.getAddProduct);

// Route for getting the admin products
router.get("/admin/product", adminController.getProducts);

// Route for posting a new product to existing list
router.post("/admin/product", adminController.postAddProduct);

// GET Route for edit the product
router.get("/admin/edit-product/:productId", adminController.getEditProduct);

// POST Route update the new edit data
router.post("/admin/edit-product", adminController.postEditProduct);

// POST ROute for deleting an existing product from the cart
router.post("/admin/delete-product", adminController.postDeleteProd);

// exports all routes
module.exports = router;
