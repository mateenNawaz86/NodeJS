import express from "express";
import url from "url";
import path from "path";
import hbs from "hbs";
import requests from "requests";

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
  requests(
    `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=b974154b70ff11af3b49d415da3e3d08`
  )
    .on("data", (chunk) => {
      // convert Data into JS object
      const data = JSON.parse(chunk);
      // pass the converted object int array
      const apiData = [data];

      console.log(
        `In ${apiData[0].name} temperature is ${apiData[0].main.temp}`
      );

      res.write(apiData[0].name);
    })
    .on("end", (err) => {
      if (err) {
        return console.log("connection closed due to errors", err);
      }
      res.end();
    });
});

// Error page
app.get("*", (req, res) => {
  res.render("error", {
    errorMsg: "PAGE NOT FOUND",
  });
});

app.listen(port, () => {
  console.log(`Dummy app is listening from port ${port}`);
});
