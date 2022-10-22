import http from "http";

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`<h1>Welcome to Home page of Nodejs website</h1>`);
  } else if (req.url == "/about") {
    res.writeHead(200);
    res.end(`<h2>Here is our About Us page</h2>`);
  } else {
    res.writeHead(404);
    res.end(`<h5>404 Page NOT found</h5>`);
  }
});

server.listen(port, () => {
  console.log(`Dummy app is listening from ${port}`);
});
