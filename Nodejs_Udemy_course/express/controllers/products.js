const products = [];

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
  products.push({ pageTitle: req.body.title });
  res.redirect("/");
};

// This logic for getting all products
exports.getProducts = (req, res) => {
  res.render("shop", {
    prods: products,
    prodTitle: products.title,
    path: "/",
    pageTitle: "Shop",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
