const fs = require("fs");
const path = require("path");

// New file create on this path
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

// Cart class
module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart from newly created file
    fs.readFile(p, (error, fileContent) => {
      // Initial data for cart
      let cart = { products: [], totalPrice: 0 };

      //   IF NOT an error in the cart
      if (!error) {
        // convert incoming JSON data into javascript object
        cart = JSON.parse(fileContent);
      }

      // Analyze the CART => find existing product
      const existingProductInd = cart.products.findIndex(
        (item) => item.id === id
      );
      const existingProduct = cart.products[existingProductInd];
      let updatedProduct;

      // IF product already exist in the CART
      if (existingProduct) {
        // Grab all the information of exisitng product
        updatedProduct = { ...existingProduct };

        // increase the existing product quantity by 1
        updatedProduct.qty = updatedProduct.qty + 1;

        // Update the quantity of existing product in CART array
        cart.products = [...cart.products];

        // update on existing product index with new product
        cart.products[existingProductInd] = updatedProduct;
      } else {
        // IF product NOT exist elready
        updatedProduct = { id: id, qty: 1 };

        // Update the CART array with the new added product
        cart.products = [...cart.products, updatedProduct];
      }

      // add product price to the existing product CART price
      cart.totalPrice = cart.totalPrice + +productPrice;

      //  write updated data on the file
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  // Method for deleting a product
  static deleteProd(id, productPrice) {
    // Read file data
    fs.readFile(p, (error, fileContent) => {
      // IF an error exist
      if (error) {
        return;
      }

      // grab the cart data
      const updatedCart = { ...JSON.parse(fileContent) };

      // Grab the selected product from the array
      const product = updatedCart.products.find((item) => item.id === id);

      // IF we have no product
      if (!product) {
        return;
      }

      const productQty = product.qty; // product quantity

      // Return the product list except the removed one
      updatedCart.products = updatedCart.products.filter(
        (item) => item.id !== id
      );

      // Return the new price of the product
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      // Update the cart file with new data
      fs.writeFile(p, JSON.stringify(updatedCart), (error) => {
        console.log(error);
      });
    });
  }

  // Get the cart
  static getCartProd(cb) {
    fs.readFile(p, (error, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (error) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};
