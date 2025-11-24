const service = require("../services/users.service");

exports.getAll = async (req, res, next) => {
  try {
    const users = await service.getAll();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const user = await service.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
