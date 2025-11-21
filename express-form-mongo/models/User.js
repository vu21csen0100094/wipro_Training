// Import mongoose to define schema and interact with MongoDB
const mongoose = require("mongoose");

// Creating a simple schema for our form data
// Schema = structure of the data
const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

// Export the model so we can use it in server.js
module.exports = mongoose.model("User", UserSchema);
