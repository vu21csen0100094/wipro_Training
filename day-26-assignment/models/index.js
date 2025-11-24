const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "skillsphere.db"
});

module.exports = sequelize;
