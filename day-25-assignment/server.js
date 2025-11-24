// --------------------------------------------
// SkillSphere API - Server Setup
// --------------------------------------------

const express = require("express");
const compression = require("compression");

const app = express();

// Middlewares
app.use(express.json());
app.use(compression());  // Enable gzip compression

// -------------------------
// DEFAULT HOME ROUTE (IMPORTANT FOR RENDER)
// -------------------------
app.get("/", (req, res) => {
  res.send("SkillSphere API is running");
});

// -------------------------
// STATUS ROUTE (DEPLOYMENT CHECK)
// -------------------------
app.get("/status", (req, res) => {
  res.send("App is live");
});

// -------------------------
// ROUTES
// -------------------------
const coursesRouter = require("./routes/courses");
const usersRouter = require("./routes/users");

app.use("/api/courses", coursesRouter);
app.use("/api/users", usersRouter);

// -------------------------
// START SERVER
// Render will inject process.env.PORT
// -------------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export for testing (SuperTest)
module.exports = app;
