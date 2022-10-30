import express from "express";
import url from "url";
import path from "path";

const port = process.env.PORT || 5000;
const app = express();

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const staticPath = path.join(__dirname, "./public");

// Setting up the HBS Engine
app.set("view engine", "hbs");

// Serve the static website using Express static method
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index", {
    logoName: "Mateen",
  });
});

// Get path with custom directory
// const customPath = path.join(__dirname, "./ChangeDirName");

// // Change default directory to custom directory
// app.set("views", customPath);

// // Response from Custom directory
// app.get("/about", (req, res) => {
//   res.render("about");
// });

app.listen(port, () => {
  console.log(`Dummy app is listening from port ${port}`);
});
