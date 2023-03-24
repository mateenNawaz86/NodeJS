const Product = require("../models/product");

// This logic for getting all products
exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      path: "/products",
      pageTitle: "All Products",
    });
  }); // calling static method for fetching all products
};

// This logic for landing page
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      path: "/",
      pageTitle: "Shop",
    });
  });
};

// This logic for cart page
exports.getCart = (req, res) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

// This logic for checkout page
exports.getCheckOut = (req, res) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
