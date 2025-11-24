
// Importing our express app from app.js
const app = require('./app');

// Server should run on PORT 3000
const PORT = 3000;
// Starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});