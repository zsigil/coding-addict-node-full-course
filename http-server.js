const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("hi");
  res.end();
});

server.listen(5000);
