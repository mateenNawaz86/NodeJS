import express from "express";

const port = process.env.PORT || 5000;
const app = express();

// Create a route for home page
app.get("/", (req, res) => {
  res.send("<h1>Hello Mateen from home page</h1>");
});

// Create a route for About page
app.get("/about", (req, res) => {
  // Send a simple JS object but Nodejs BTs convert it to a JSON 
  res.send([
    {
      id: 1,
      firstName: "Mateen",
      lastName: "Nawaz",
    },
    {
      status: "Mingle",
      passion: "Programming",
      qualification: "Graduate",
    },
  ]);
});

// Create a route for contact page
app.get("/contact", (req, res) => {
  res.send("<h1>Hello Mateen contact page</h1>");
});

app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
