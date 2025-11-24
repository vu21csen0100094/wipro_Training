const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseTitle: String,
  status: String
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
