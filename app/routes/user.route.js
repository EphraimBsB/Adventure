const express = require("express");
const {userController} = require("../controllers/index");
const {registerValidation,loginValidation} = require("../middlewares/credentials.validation");

const router = express.Router();
router.post("/register", registerValidation, userController.signup);
router.post("/login", loginValidation, userController.login);

module.exports = router;