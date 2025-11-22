/*
  Q7: Node CLI Script using ONLY Core Modules
  ----------------------------------------------------
  - Writes "App started" into logs/app.log
  - Creates logs folder if missing
  - Starts a simple HTTP server returning JSON
*/

const fs = require("fs");
const path = require("path");
const http = require("http");

// Create logs folder if not exists
const logFolder = path.join(__dirname, "logs");
if (!fs.existsSync(logFolder)) {
  fs.mkdirSync(logFolder);
}

// Full path for log file
const logFile = path.join(logFolder, "app.log");

// Append log message
const message = `${new Date().toISOString()} - App started\n`;
fs.appendFileSync(logFile, message, "utf-8");

console.log("Log written to:", logFile);

// Create a simple HTTP JSON server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "running" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

// Start server on port 3001
server.listen(3001, () => {
  console.log("HTTP Server running at http://localhost:3001");
});
