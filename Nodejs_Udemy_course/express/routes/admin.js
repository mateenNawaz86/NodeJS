const express = require("express");
// const path = require("path");
// const rootDir = require("../util/path");

const router = express.Router();

const products = [];
router.get("/add-product", (req, res) => {
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { docTitle: "Add Product" });
});

router.post("/product", (req, res) => {
  products.push({ pageTitle: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
