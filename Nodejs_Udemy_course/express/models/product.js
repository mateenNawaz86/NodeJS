const path = require("path");
const fs = require("fs");

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
  constructor(title, imgURL, description, price) {
    this.title = title;
    this.imgURL = imgURL;
    this.description = description;
    this.price = price;
  }

  // Method to save new product to array
  save() {
    getProdsFromFile((products) => {
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
    getProdsFromFile(cb);
  }
};
