// --------------------------------------------
// SERVER SETUP WITH GZIP + ROUTES + STATUS
// --------------------------------------------
const express = require("express");
const compression = require("compression");

const app = express();
app.use(express.json());
app.use(compression());   // Enables gzip compression

// Status route for deployment
app.get("/status", (req, res) => {
  res.send("App is live");
});

// Load routers
const coursesRouter = require("./routes/courses");
const usersRouter = require("./routes/users");

app.use("/api/courses", coursesRouter);
app.use("/api/users", usersRouter);

// PORT from environment (Render/Heroku)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));

// Export app for SuperTest (very important)
module.exports = app;
