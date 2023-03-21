// const products = [];
const Product = require("../models/product");

// This logic return the add product form
exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    activeAddProduct: true,
  });
};

// This logic for posting a new product
exports.postAddProduct = (req, res) => {
  // products.push({ title: req.body.title });

  const product = new Product(req.body.title); // grabe title from request body
  product.save(); // call save method to save the new product into the array
  res.redirect("/");
};

// This logic for getting all products
exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      path: "/",
      pageTitle: "Shop",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  }); // calling static method for fetching all products
};
