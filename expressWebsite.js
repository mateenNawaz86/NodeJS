import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is About page");
});

app.listen(port, () => {
  console.log("Nodejs app is listening from", port);
});
