const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

/**
 * Authentication
 */
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/", (req, res) => {
  console.log("Starting server...")
  res.status(200).json("Welcome to fitness buddy api!");
});

module.exports = router;
