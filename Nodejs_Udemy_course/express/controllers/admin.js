const Product = require("../models/product");

// This logic return the add product form
exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/add-product",
    productCSS: true,
    activeAddProduct: true,
  });
};

// This logic for posting a new product
exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title); // grabe title from request body
  product.save(); // call save method to save the new product into the array
  res.redirect("/");
};

// This logic is for getting the admin products
exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      path: "/admin/product",
      pageTitle: "Admin Products",
    });
  });
};
