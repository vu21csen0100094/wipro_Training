const express = require("express");
const router = express.Router();

// HTML COURSE PAGE (for browser)
router.get("/", (req, res) => {
  const html = `
    <h1>SkillSphere LMS Courses</h1>
    <ul>
      <li>Node.js Basics</li>
      <li>Express.js Mastery</li>
      <li>React Advanced</li>
    </ul>
  `;
  res.send(html);
});

// JSON API VERSION
router.get("/api", (req, res) => {
  res.json([
    { id: 1, name: "Node.js Basics" },
    { id: 2, name: "Express.js Mastery" },
    { id: 3, name: "React Advanced" }
  ]);
});

module.exports = router;
