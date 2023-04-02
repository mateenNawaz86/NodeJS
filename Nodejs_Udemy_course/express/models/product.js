const path = require("path");
const fs = require("fs");

const cart = require("./cart");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProdsFromFile = (cb) => {
  // read data from file
  fs.readFile(p, (error, fileContent) => {
    if (error) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

// Class for managing all incoming products
module.exports = class Product {
  constructor(id, title, imgURL, description, price) {
    this.id = id;
    this.title = title;
    this.imgURL = imgURL;
    this.description = description;
    this.price = price;
  }

  // Method to save new product to array
  save() {
    getProdsFromFile((products) => {
      // Check IF the edit requested product ID is already in the array or NOT
      if (this.id) {
        // Grab the existing product index from an array
        const existingProdInd = products.findIndex(
          (item) => item.id === this.id
        );
        const updatedProducts = [...products]; // updated existing array with new data
        updatedProducts[existingProdInd] = this;
        // Store newly created product into file
        fs.writeFile(p, JSON.stringify(updatedProducts), (error) => {
          console.log(error);
        });
      } else {
        this.id = Math.random().toString(); // Create random id's

        // Push newly created product to products array which is stored in file
        products.push(this); // here 'this' refer to the class object

        // Store newly created product into file
        fs.writeFile(p, JSON.stringify(products), (error) => {
          console.log(error);
        }); // stringify convert JS object into JSON
      }
    });
  }

  // Method for delete the product
  static deleteById(id) {
    getProdsFromFile((products) => {
      const product = products.find((item) => item.id === id);

      // Filter out the product from the file
      const updatedProduct = products.filter((item) => item.id !== id);

      // Write updated data on the file
      fs.writeFile(p, JSON.stringify(updatedProduct), (error) => {
        if (!error) {
          cart.deleteProd(id, product.price);
        }
      });
    });
  }

  // Method to fetch all products from array
  static fetchAll(cb) {
    getProdsFromFile(cb);
  }

  // Method for showing the Detail of the selected product
  static findProdById(id, cb) {
    getProdsFromFile((products) => {
      // Grab the specific selected product from file by inputed ID
      const product = products.find((item) => item.id === id);
      cb(product); // Pass selected prod from callback func
    });
  }
};
