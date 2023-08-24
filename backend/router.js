const { Router } = require("express");
const router = Router();

const userController = require('./controllers/userController')

/**
 * Authentication
 */
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.delete("/delete-account/:id", userController.delete); 
//TODO: params pour le moment mais ensuite avec jwt


/**
 * Start a session
 */
router.get("/session/:id", (req, res) => res.send("session: " + req.params.id));
router.post("/session", (req, res) => res.send("créer une session"));

/**
 * Add exercise and sets to a session
 * - One form in two parts : 
 *  - first, create a line in sessionExercise with session_id and exercise_id (selected in the list)
 *  - second, add sets to it (loop?)
 */
router.post("/session/:id", (req, res) => res.send("add exercise and sets"));

/**
 * Exercise list
 * - basic CRUD
 */
router.get("/exercise-list", (req, res) => res.send("exercise list"));
router.post("/exercise-list", (req, res) => res.send("create new exercise"));
router.patch("/exercise-list/:id", (req, res) =>
  res.send("modify exercise" + req.params.id)
);
router.delete("/exercise-list/:id", (req, res) =>
  res.send("delete exercise" + req.params.id)
);

// Pas dans la v1
router.get("stats", (req, res) => res.send("stats"));

module.exports = router;
