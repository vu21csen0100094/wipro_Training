// Importing express
const express = require('express');
const app = express();

// Root route - when user hits "/"
// It should send "Hello World!" as response
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Exporting app so that test file can use it
module.exports = app;