import fs from "fs";

const bioData = {
  name: "Mateen Nawaz",
  age: 21,
  status: "single",
};

// Convert tha Javascript object into JSON
const jsonFormat = JSON.stringify(bioData);
console.log(jsonFormat);

// Add converted data into another file
fs.writeFile("file.txt", jsonFormat, (err) => {
  console.log(err);
});

// Read the data from transfered file
fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(`JSON Data: `, data);
});

// Convert the file data into normal JS object
fs.readFile("file.txt", (err, data) => {
  const convertJsObj = JSON.parse(data);
  console.log(`JavaScript Object: `, convertJsObj);
});
