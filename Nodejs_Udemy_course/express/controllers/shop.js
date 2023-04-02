const Product = require("../models/product");
const Cart = require("../models/cart");

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

// This logic is for GET cart route
exports.getCart = (req, res) => {
  Cart.getCartProd((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      // Filtered out the product which are exactly in the cart
      for (prodItem of products) {
        // Check cart product ID is matched with product in the list
        const cartProdData = cart.products.find(
          (item) => item.id === prodItem.id
        );
        if (cartProdData) {
          // IF product in the cart push into the cart page
          cartProducts.push({ productData: prodItem, qty: cartProdData.qty });
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};

// This logic is for POST cart
exports.postCart = (req, res) => {
  const prodId = req.body.productId;
  Product.findProdById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

// This logic is used for delete the item from the cart
exports.postCartProdDelete = (req, res) => {
  const prodId = req.body.productId;
  Product.findProdById(prodId, (product) => {
    Cart.deleteProd(prodId, product.price);
    res.redirect("/cart");
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
