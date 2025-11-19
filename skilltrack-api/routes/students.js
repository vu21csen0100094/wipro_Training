// student.js will be used for following CRUD operations for student entity
// 1. Create a new student - POST /students
// 2. Get all students - GET /students
// 3. Get a student by ID - GET /students/:id
// 4. Update a student by ID - PUT /students/:id
// 5. Delete a student by ID - DELETE /students/:id

const express = require('express');
const router = express.Router();

let students = [];   // In-memory database
let currentId = 1;   // ID auto increment

// CREATE student
router.post('/', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required" });
  }

  const newStudent = {
    id: currentId++,
    name,
    age
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student created successfully!",
    student: newStudent
  });
});

// GET ALL students
router.get('/', (req, res) => {
  res.json(students);
});

// GET student by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// UPDATE student
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = name;
  student.age = age;

  res.json({
    message: "Student updated successfully",
    student
  });
});

// DELETE student
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);

  res.json({ message: "Student deleted successfully" });
});

module.exports = router;
