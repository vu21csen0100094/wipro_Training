const express = require('express');
const app = express();
const port = 3000;

// Custom middleware
const logger = require('./middleware/logger');

// Body parser for JSON
app.use(express.json());

// Global logger
app.use(logger);

// Route for /students
app.use('/students', require('./routes/students'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
