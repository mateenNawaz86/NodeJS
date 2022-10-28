import http from "http";
import fs from "fs";
import requests from "requests";

// Getting the data of HTML file
const fileOfUI = fs.readFileSync("index.html", "utf-8");

// Function for updateValues of API
const updateValues = (preVal, updateVal) => {
  let changeValues = preVal.replace("{%temperature%}", updateVal.main.temp);
  changeValues = changeValues.replace("{%maxTemp%}", updateVal.main.temp_max);
  changeValues = changeValues.replace("{%minTemp%}", updateVal.main.temp_min);
  changeValues = changeValues.replace("{%location%}", updateVal.name);
  changeValues = changeValues.replace("{%country%}", updateVal.sys.country);
  changeValues = changeValues.replace(
    "{%tempstate%}",
    updateVal.weather[0].main
  );

  return changeValues;
};

// Create a new server
const port = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  try {
    if (req.url == "/") {
      requests(
        "http://api.openweathermap.org/data/2.5/weather?q=islamabad&units=metric&appid=b974154b70ff11af3b49d415da3e3d08"
      )
        .on("data", (chunk) => {
          // convert Data into JS object
          const data = JSON.parse(chunk);

          // pass the converted object int array
          const apiData = [data];

          // loop over the all array elements
          const realTimeData = apiData
            .map((item) => {
              return updateValues(fileOfUI, item);
            })
            .join(" ");
          res.write(realTimeData);
        })
        .on("end", (err) => {
          if (err) {
            return console.log("connection closed due to errors", err);
          }
          res.end();
        });
    }
  } catch (error) {
    console.log(error);
  }
});

server.listen(port, () => {
  console.log(`Weather app is listening on port ${port}`);
});
