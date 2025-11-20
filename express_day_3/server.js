const express = require("express");
const morgan = require("morgan");
const app = express();

// -----------------------------
// Built-in Middleware
// -----------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------
// Morgan Logging Middleware
// -----------------------------
app.use(morgan("dev"));

// -----------------------------
// Custom Logger Middleware (User Story 1)
// -----------------------------
const customLogger = require("./middleware/logger");
app.use(customLogger);

// -----------------------------
// Student Routes
// -----------------------------
const studentRoutes = require("./routes/students");
app.use("/students", studentRoutes);

// -----------------------------
// 404 Not Found Middleware
// -----------------------------
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// -----------------------------
// Global Error Handling Middleware (User Story 5)
// -----------------------------
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(4000, () => {
  console.log("SkillTrack Server running on port 4000");
});
