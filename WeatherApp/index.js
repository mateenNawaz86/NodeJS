"use strict";

import http from "http";
import fs from "fs";
import requests from "requests";

// Getting the data of HTML file
const fileOfUI = fs.readFile("./index.html", "utf-8", (err, data) => {
  //   console.log(data);
});

// Create a new server
const port = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "http://api.openweathermap.org/data/2.5/weather?q=islamabad&units=metric&appid=b974154b70ff11af3b49d415da3e3d08"
    )
      .on("data", (chunk) => {
        // convert Data into JS object
        const data = JSON.parse(chunk);
        // pass the converted object int array
        const apiData = [data];
        console.log(apiData);
      })
      .on("end", (err) => {
        if (err) {
          return console.log("connection closed due to errors", err);
        }
        console.log("end");
      });
  }
});

server.listen(port, (err) => {
  console.log(`Weather app is listening on port ${port}`);
});
