const express = require("express");

const port = 4000;
const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Hey, Mateen</h1>");
// });

// Use Middleware
// app.use((req, res) => {
//   res.send("<h1>Hello Mateen Mirani!</h1>");
// });

// 1. Route
app.use("/", (req, res, next) => {
  console.log("First Middleware!");
  next();
});

app.use('/add-product', (req, res) => {
  res.send("<h1>Hello My name is Mateen Nawaz!</h1>")
})
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
