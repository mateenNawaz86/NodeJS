const http = require("http");
const routes = require("./routes");

const port = 3001;

const app = http.createServer(routes);
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
