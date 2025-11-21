// Import express to create server
const express = require("express");
const app = express();

// Import mongoose to connect to MongoDB
const mongoose = require("mongoose");

// Import our User model
const User = require("./models/User");

// Set EJS as the template engine (to use .ejs files)
app.set("view engine", "ejs");

// Middleware to read form data (body parser)
app.use(express.urlencoded({ extended: true }));

// ---------------------------
// CONNECT TO MONGODB COMPASS
// ---------------------------
// Change "formDB" to any name you like.
// Make sure MongoDB Compass is running.
mongoose.connect("mongodb://127.0.0.1:27017/formDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ---------------------------
// ROUTES
// ---------------------------

// Show the form page
app.get("/", (req, res) => {
    // Rendering the form.ejs file
    res.render("form");
});

// Handle form submission
app.post("/register", async (req, res) => {

    // Extracting form data
    const { name, email } = req.body;

    // Creating a new user document
    const newUser = new User({
        name,
        email
    });

    // Save the data into MongoDB
    await newUser.save();

    // Send a success message to the browser
    res.send(`Registration successful for ${name}`);
});

// ---------------------------
// START SERVER
// ---------------------------
app.listen(4000, () => {
    console.log("Server running on port 4000");
});
