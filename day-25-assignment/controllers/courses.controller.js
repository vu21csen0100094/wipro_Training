const service = require("../services/courses.service");

// Controller → handles request & response
exports.getAll = async (req, res, next) => {
  try {
    const data = await service.getAll();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
