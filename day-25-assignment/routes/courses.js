const express = require("express");
const router = express.Router();
const controller = require("../controllers/courses.controller");

// ----------------------
// HTML PAGE VERSION
// ----------------------
router.get("/", async (req, res) => {
  const courses = [
    "Node.js Basics",
    "Express.js Mastery",
    "React Advanced"
  ];
  
  const html = `
  <h1>SkillSphere LMS Courses</h1>
  <ul>
    ${courses.map(c => `<li>${c}</li>`).join("")}
  </ul>
  `;
  
  res.send(html);
});

// ----------------------
// API JSON VERSION
// /courses/api
// ----------------------
router.get("/api", controller.getAll);

module.exports = router;
