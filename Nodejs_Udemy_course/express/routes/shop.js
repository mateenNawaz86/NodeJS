const express = require("express");
// const path = require("path");

// const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  // By using Template engine PUG
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    hasProducts: products.length > 0,
  });
});

module.exports = router;
