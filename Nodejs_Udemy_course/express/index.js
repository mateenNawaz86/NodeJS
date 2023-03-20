const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
// const { engine } = require("express-handlebars");

const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");

const port = 5000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); // set the dynamic route for file

// Middleware used for parsing a request body
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for serve static files to UI
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", adminRoutes);
app.use(shopRoute);

// Route for Error page
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
  res
    .status(404)
    .render("error", { pageTitle: "PAGE NOT FOUND", path: "Error" });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
