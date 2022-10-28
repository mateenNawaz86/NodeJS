import http from "http";
import fs from "fs";

const port = process.env.PORT || 5000;
const server = http.createServer();

// Read file in normal way
// server.on("request", (req, res) => {
//   fs.readFile("streamText.txt", (err, data) => {
//     if (err) return console.error(err);
//     res.end(data.toString());
//   });
// });

// 2. Second way to read data and print in stream format
// server.on("request", (req, res) => {
//   //  create a read stream here
//   const readStream = fs.createReadStream("streamTet.txt");
//   // read data in chunk by chunk
//   readStream.on("data", (chunksData) => {
//     res.write(chunksData);
//   });

//   // send data as a response
//   readStream.on("end", () => {
//     res.end();
//   });

//   // send error message if there is an error
//   readStream.on("error", (err) => {
//     res.end("Error occured!");
//   });
// });

// 3. Third way to read data using pipe() method
server.on("request", (req, res) => {
  const readStream = fs.createReadStream("streamText.txt");
  readStream.pipe(res);
});

server.listen(port, () => {
  console.log("Server is on listening port", port);
});
