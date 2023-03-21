const path = require("path");
const fs = require("fs");

// const products = []; // empty array of product

// Class for managing all incoming products
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  // Method to save new product to array
  save() {
    // products.push(this);
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    ); // it will return newly created json file absolute path

    // Read the content of newly created file
    fs.readFile(p, (error, fileContent) => {
      let products = []; // empty products array

      // If there is no error then convert the incoming JSON data into JS object
      if (!error) {
        products = JSON.parse(fileContent); // Convert json data into js object or array
      }

      // Push newly created product to products array which is stored in file
      products.push(this); // here 'this' refer to the class object

      // Store newly created product into file
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log(error);
      }); // stringify convert JS object into JSON
    });
  }

  // Method to fetch all products from array
  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

    // read data from file
    fs.readFile(p, (error, fileContent) => {
      if (error) {
        // return [];
        cb([]);
      }

      // return JSON.stringify(fileContent);
      cb(JSON.stringify(fileContent));
    });
  }
};
