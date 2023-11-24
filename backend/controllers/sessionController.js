const { Session, Exercise, SessionExercise, Set } = require("../models/all");

const sessionController = {
  create: async (req, res) => {
    try {
      const newSession = await Session.createSession(req.user.id);

      res.status(201).json(newSession);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  delete: async (req, res) => {
    try {
      const sessionToDelete = await Session.findByPk(req.params.id);
      await sessionToDelete.destroy();

      res.status(204).json({ message: "Session deleted!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const session = await Session.findByPk(req.params.id, {
        include: [
          {
            model: Exercise,
            include: {
              association: "exercise_details",
              where: { session_id: req.params.id },
              //order: [["created_at", "DESC"]],
              include: {
                association: "exercise_sets",
              },
            },
          },
        ],
      });

      if (!session) {
        res.status(404).json({ error: "Not found." });
        return;
      }
      if (req.user.id !== session.user_id) {
        res.status(400).json({ error: "You are not authorized to this this." });
        return;
      }

      res.json(session);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
      return;
    }
  },

  getAllFromUser: async (req, res) => {
    try {
      const { id } = req.user;

      const sessionList = await Session.findAll({
        where: {
          user_id: id,
        },
        order: [["created_at", "DESC"]]
      });

      res.json(sessionList);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  addExerciseToSession: async (req, res) => {
    try {
      //NB: nb_reps et weight_lifted sont des arrays
      const { exercise_id, nb_reps, weight_lifted } = req.body;
      const { id } = req.params;

      // Vérification des champs requis
      if (!exercise_id || nb_reps.length === 0 || weight_lifted.length === 0) {
        return res.status(400).json({error: "Can't add empty exercise."})
      }
      
      // Ajout de l'exercice à la séance en BDD
      // add.Exercise est codée directement sur le modèle
      const newExercise = await SessionExercise.addExercise(id, exercise_id);

      // Pour chaque série, on insère le nombre de rep et la charge
      // correspondante à l'exercice en question
      nb_reps.map(async (e, index) => {
        await Set.addSet(newExercise.id, e, weight_lifted[index]);
      });

      // Réponse au client
      res.status(201).json({
        message: "Exercise added to session!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

};

module.exports = sessionController;
