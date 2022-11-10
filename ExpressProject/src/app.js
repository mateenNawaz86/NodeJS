const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "hbs");

// Getting static path
const staticPath = path.join(__dirname, "../public");
const webPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// getting the static sites
app.use(express.static(staticPath));
app.set("views", webPath);

// Serve the partials using hbs static method
hbs.registerPartials(partialPath);

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
