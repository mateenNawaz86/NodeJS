import express from "express";
import url from "url";
import path from "path";
import hbs from "hbs";

const port = process.env.PORT || 5000;
const app = express();

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const staticPath = path.join(__dirname, "./public");
const webPath = path.join(__dirname, "./Templates/views");
const partialPath = path.join(__dirname, "./Templates/partials");

// Setting up the HBS Engine
app.set("view engine", "hbs");
app.set("views", webPath);

// Serve the static website using Express static method
app.use(express.static(staticPath));

// Serve the partials using hbs static method
hbs.registerPartials(partialPath);

// landing page
app.get("/", (req, res) => {
  res.render("index", {
    logoName: "Mateen",
  });
});

// about page
app.get("/about", (req, res) => {
  res.render("about", {
    logoName: "Mateen",
  });
});

app.listen(port, () => {
  console.log(`Dummy app is listening from port ${port}`);
});
