const fs = require("fs");

const requestHandler = (req, res) => {
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
    // Code store incoming data into buffer start
    const reqBody = []; // store incoming request data
    req.on("data", (chunk) => {
      console.log(chunk);
      reqBody.push(chunk); // push chunks of incoming data to variable
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(reqBody).toString(); // convert incoming req data to string
      // console.log(parseBody)
      const message = parseBody.split("=")[1];
      // fs.writeFileSync("userMsg.txt", message); // file creation with sync nature

      // File creation with async nature
      fs.writeFile("msg.txt", message, (err) => {
        // Code store incoming data into buffer end
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write(" <head><title>My first page</title></head>");
  res.write("<h1>Welcome to Test Page!</h1>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
