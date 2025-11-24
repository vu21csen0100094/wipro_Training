const sequelize = require("../models/index");
const Instructor = require("../models/Instructor");
const Course = require("../models/Course");

async function run() {
  await sequelize.sync({ force: true });

  const inst = await Instructor.create({
    name: "John Doe",
    email: "john@example.com"
  });

  await Course.create({
    title: "NodeJS Advanced",
    level: "intermediate",
    instructorId: inst.id
  });

  const result = await Instructor.findAll({
    where: { id: inst.id },
    include: Course
  });

  console.log(JSON.stringify(result, null, 2));
}

run();
