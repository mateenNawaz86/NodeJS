import express from "express";
import url from "url";
import path from "path";

const port = process.env.PORT || 5000;
const app = express();

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const staticPath = path.join(__dirname, "./public");

// Serve the static website using Express static method
app.use(express.static(staticPath));

// Create a route for static web page
app.get("/", (req, res) => {
  res.send("<h1>Hello Mateen from home page</h1>");
});

app.listen(port, () => {
  console.log(`Dummy app is listening from port ${port}`);
});
