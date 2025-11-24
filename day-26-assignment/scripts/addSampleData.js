const connectDB = require("../db/mongo");
const User = require("../models/User");
const Enrollment = require("../models/Enrollment");

async function run() {
  await connectDB();

  const user = await User.create({
    name: "Alice",
    email: "alice@example.com",
    role: "student"
  });

  await Enrollment.create({
    user: user._id,
    courseTitle: "NodeJS Basics",
    status: "active"
  });

  console.log("Sample data inserted");
  process.exit(0);
}

run();
