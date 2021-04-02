const express = require("express");
const userController = require("../controllers/user.controller");
const {
  userValidation,
} = require("../middlewares/user.credentials.validation");

const router = express.Router();
router.post("/sign-up", userValidation, userController.signup);

module.exports = router;
