const connectDB = require("../db/mongo");
const Enrollment = require("../models/Enrollment");

async function run() {
  await connectDB();

  const data = await Enrollment.find().populate("user");
  console.log(JSON.stringify(data, null, 2));

  process.exit(0);
}

run();
