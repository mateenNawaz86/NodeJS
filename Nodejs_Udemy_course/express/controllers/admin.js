const Product = require("../models/product");

// This logic return the add product form
exports.getAddProduct = (req, res) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/add-product",
    editing: false,
  });
};

// This logic is for GET edit-product route
exports.getEditProduct = (req, res) => {
  const editMode = req.query.edit; // grab the edit mode

  if (!editMode) {
    return res.redirect("/");
  }

  // Grab the productId from the request body
  const prodId = req.params.productId;

  Product.findProdById(prodId, (product) => {
    // IF product NOT find with the gien ID
    if (!prodId) {
      return res.redirect("/");
    }

    // Return this logic if it is in the editMode
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
};

// This logic for posting a new product
exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imgURL = req.body.imgURL;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imgURL, description, price); // grabe all info from request body
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
