import http from "http";

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<h1> Hello from Mateen Nawaz</h1> <p>World is nothing but fancy</p>"
  );
});

server.listen(port, () => {
  console.log(`Server is listen from port ${port}`);
});
