// const x = require("./App");
import { x } from "./App.js";
import result from "./App.js";
import { fileURLToPath } from "url";
console.log(x);
console.log(result);

// Global model
console.log("I'm a globel model!");

// Non-global model
import fs from "fs";
fs.writeFileSync("hello.txt", "Hello i am non-global model!");

// Directory name
const fileName = fileURLToPath(import.meta.url);
console.log("This is directory name:", fileName);

// Create a Express server
import express from "express";
const app = express();
const port = 3000;

// Route
app.get("/", (req, res) => {
  res.write("<h1>Mateen Nawaz!</h1>");
  res.write("<h1>Muhammad Farooq!</h1>");
  res.end();
});
app.listen(port, () => {
  `App is listening on port ${port}`;
});
