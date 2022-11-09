const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;

// Getting static path
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About page");
});

app.get("*", (req, res) => {
  res.send("404 Page not found");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
