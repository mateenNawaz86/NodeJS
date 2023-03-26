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

// This logic for showing the detail of the product
exports.getProductDetail = (req, res) => {
  const prodID = req.params.productId; // Grab the ID from the req body
  Product.findProdById(prodID, (product) => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: "Product Detail",
      path: "/products",
    });
  });
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

// This logic for cart page
exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

// This logic for checkout page
exports.getCheckOut = (req, res) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
