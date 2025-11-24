const express = require("express");
const router = express.Router();
const controller = require("../controllers/courses.controller");

// GET all courses
router.get("/", controller.getAll);

// Add more endpoints if needed...

module.exports = router;
