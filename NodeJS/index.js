// import { addTwoNumber } from "./second.js";
// import os from "os";
// import path from "path";
// import {fileURLToPath} from 'url';

// console.log(addTwoNumber(2, 3));

// console.log("Hello World!");
// console.log(os.release);
// console.log(path.dirname("/foo/bar/baz/asdf/quux"));
// console.log(path.basename("C:\\temp\\myfile.html"));

// const __filename = fileURLToPath(import.meta.url);
// console.log(path.extname(__filename));

import fs from "fs";

// create a new file
// fs.writeFile("file.txt", "Hello my name is Mateen Nawaz.", () => {
//   console.log("file is ready to serve.");
// });

// // read file data
// fs.readFile("file.txt", null, (err, data) => {
//   console.log(err, data.toString());
// });

// // rename the file
// fs.rename("file.txt", "renameFile.txt", (err, data) => {
//   console.log(err, data);
// });

// // remove the file
// fs.unlink("renameFile.txt", (err, data) => {
//   if (err) throw err;
//   console.log("File is deleted");
// });

// create a new empty folder
fs.mkdir("first", (err, data) => {
  console.log(err, data);
});

// create a new file inside the first folder
fs.writeFile(
  "./first/file.txt",
  "Hello, I'm from first folder",
  (err, data) => [console.log(err, data)]
);

// Read data from the newly created file
fs.readFile("./first/file.txt", "utf-8", (err, data) => {
  // it return data in  buffer format
  console.log(err, data);
  // show data in string file
  console.log(data.toString());
});

// Rename the file
fs.rename("./first/file.txt", "./first/update.txt", (err, data) => {
  console.log(err, data);
});

// Update the file data
fs.appendFile(
  "./first/update.txt",
  "Hey, I'm updated successfully",
  (err, data) => {
    console.log(err, data);
  }
);

// Delete the newly created file
// fs.unlink("./first/update.txt", (err, data) => {
//   console.log(err, data);
// });
