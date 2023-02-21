const http = require("http");
const fs = require("fs");
const port = 3001;

const app = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log(req.url, req.method, req.headers);

  let url = req.url;
  let method = req.method;
  // Send back response to the server
  if (url === "/") {
    res.write("<html>");
    res.write(" <head><title>My first page</title></head>");
    res.write(
      "<body><form action='/userdata' method='POST'><input type='text' placeholder='enter user name' name='username' /><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/userdata" && method === "POST") {
    fs.writeFileSync("userMsg.txt", "Dummy Data");
    res.statusCode = 302;
    res.setHeader("location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write(" <head><title>My first page</title></head>");
  res.write("<h1>Welcome to Test Page!</h1>");
  res.write("</html>");
  res.end();
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
