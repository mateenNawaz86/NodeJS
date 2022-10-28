import fs from "fs";

// async format of code
fs.readFile("file2.txt", "utf-8", (err, data) => {
  console.log(err, data);
});

// console.log("Loading is finish there.");

// sync format of code read the file content
const fileReading = fs.readFileSync("file.txt");
console.log(fileReading.toString());

console.log("Loading is finish there.");

// async format for write the file
fs.writeFile("file2.txt", "Hey my name is file2.txt", () => {
  console.log("Data is written in file successfully");
});
