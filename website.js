import http from "http";
import fs from "fs";

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data);
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>Hey from the About page</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>NOT FOUND</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is listen from port ${port}`);
});
