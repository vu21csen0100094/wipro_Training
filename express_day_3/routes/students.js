const express = require("express");
const validateStudent = require("../middleware/validateStudent");
const router = express.Router();

let students = [
  { id: 1, name: "Rashmi", email: "rashmi@example.com", progress: "80%" },
  { id: 2, name: "Arun", email: "arun@example.com", progress: "60%" }
];

// GET all students
router.get("/", (req, res) => {
  res.json(students);
});

// POST new student (with validation)
router.post("/", validateStudent, (req, res) => {
  const { name, email } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    email,
    progress: "0%"
  };

  students.push(newStudent);
  res.json(newStudent);
});

module.exports = router;
