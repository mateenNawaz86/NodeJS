const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const port = 4000;
const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Hey, Mateen</h1>");
// });

// Use Middleware
// app.use((req, res) => {
//   res.send("<h1>Hello Mateen Mirani!</h1>");
// });

// Middleware used for parsing a request body
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api", adminRoute);
app.use(shopRoute);

// Route for Error page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
