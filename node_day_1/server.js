// server.js

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Welcome to Node.js Server!");
  } 
  else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("This is the About Page of our Node.js Server.");
  } 
  else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("Contact us at: support@mycompany.com");
  } 
  else {
    res.statusCode = 404;
    res.end("404 - Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
