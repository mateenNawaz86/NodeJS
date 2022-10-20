import fs from "fs";

// create a new folder
fs.mkdir("second", (err, data) => {
  console.log(data);
});

// Create a new file inside the second folder
fs.writeFile(
  "./second/challenge2.txt",
  "Hello I'm from challenge #2",
  (err, data) => {
    console.log(data);
  }
);

// Read a newly created file data
fs.readFile("./second/challenge2.txt", "utf-8", (err, data) => {
  console.log(data);
});

// Rename the newly created file
fs.rename(
  "./second/challenge2.txt",
  "./second/secondChallenge.txt",
  (err, data) => {
    console.log(data);
  }
);

// Update the newly created file data
fs.appendFile(
  "./second/secondChallenge.txt",
  " Hey My data is updated successfully",
  (err, data) => {
    console.log(data);
  }
);

// Delete the newly created file
fs.unlink("./second/secondChallenge.txt", (err, data) => {
  console.log(data);
});

// Delete the newly created folder
fs.rmdir("second", (err) => {
  console.log("Folder is deleted is successfully");
});
