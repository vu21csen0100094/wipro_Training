const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Instructor = require("./Instructor");

const Course = sequelize.define("Course", {
  title: DataTypes.STRING,
  level: DataTypes.STRING
});

Instructor.hasMany(Course, { foreignKey: "instructorId" });
Course.belongsTo(Instructor, { foreignKey: "instructorId" });

module.exports = Course;
