const { Router } = require("express");
const router = Router();

const userController = require("./controllers/userController");
const exerciseController = require("./controllers/exerciseController");
const categoryController = require("./controllers/categoryController");
const sessionController = require("./controllers/sessionController");

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
router.post("/session", sessionController.create);
router.get('/sessions/:id', sessionController.getAllFromUser)
router.get("/session/:id", sessionController.getOne);
router.delete("/session/:id", sessionController.delete);

/**
 * Add exercise and sets to a session
 * - One form in two parts :
 *  - first, create a line in sessionExercise with session_id and exercise_id (selected in the list)
 *  - second, add sets to it (loop?)
 */
router.post("/session/:id/exercise", sessionController.addExerciseToSession);
router.post(
  "/session/session-exercise/:id/set",
  sessionController.addSetToExercise
);
router.get(
  "/session/session-exercise/:id",
  sessionController.getOneExerciceFromSession
);

/**
 * Exercise list
 * - basic CRUD
 */
router.get("/exercise-list", exerciseController.getAll);
router.post("/exercise-list", exerciseController.add);
router.patch("/exercise-list/:id", exerciseController.update);
router.delete("/exercise-list/:id", exerciseController.delete);

// TODO: AJOUTER LES EXOS FAVORIS 

// Liste des categories, liée aux exercises.
// Seulement la get sera utilisée par l'utilisateur pour créer la liste déroulante lors de la création d'un nouvel exo
router.get("/exercise-categories", categoryController.getAll);
/*--------------------*/
router.post("/exercise-category", categoryController.add);
router.patch("/exercise-category/:id", categoryController.update);
router.delete("/exercise-category/:id", categoryController.delete);
/*--------------------*/

// Pas dans la v1
router.get("stats", (req, res) => res.send("stats"));

module.exports = router;
