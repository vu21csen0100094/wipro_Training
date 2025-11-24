const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.controller");

// GET all
router.get("/", controller.getAll);

// POST create
router.post("/", controller.create);

module.exports = router;
