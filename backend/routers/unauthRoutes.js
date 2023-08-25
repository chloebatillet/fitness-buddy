const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

/**
 * Authentication
 */
router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;
