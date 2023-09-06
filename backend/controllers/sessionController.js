const { Session, Exercise, SessionExercise, Set } = require("../models/index");

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
    }
  },

  getAllFromUser: async (req, res) => {
    try {
      const { id } = req.user;

      const sessionList = await Session.findAll({
        where: {
          user_id: id,
        },
      });

      res.json(sessionList);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  addExerciseToSession: async (req, res) => {
    try {
      const { exercise_id, nb_reps, weight_lifted } = req.body;
      const { id } = req.params;

      const newExercise = await SessionExercise.addExercise(id, exercise_id);

      nb_reps.map(async (e, index) => {
        console.log(e, weight_lifted[index]);
        await Set.addSet(newExercise.id, e, weight_lifted[index]);
      });

      res.status(201).json({
        // sessionExercise_id: newExercise.id,
        message: "Exercise added to session!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // addSetToExercise: async (req, res) => {
  //   try {
  //     const { nb_reps, weight_lifted } = req.body;
  //     const { session_exercise_id } = req.params;
  //     console.log("--------------------->");
  //     //console.log(nb_reps);

  //     nb_reps.map(async (e, index) => {
  //       console.log(e, weight_lifted[index]);
  //       await Set.addSet(session_exercise_id, e, weight_lifted[index]);
  //     });

  //     //await Set.addSet(session_exercise_id, nb_reps, weight_lifted);

  //     res.status(201).json({ message: "Set added!" });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json(error);
  //   }
  // },

  // quand on clique sur la ptite flèche pour dérouler
  getOneExerciceFromSession: async (req, res) => {
    try {
      const exerciseSets = await SessionExercise.findByPk(req.params.id, {
        include: [
          {
            association: "exercise_name",
            attributes: ["name"],
          },
          {
            association: "sets",
          },
        ],
        order: [["sets", "created_at", "ASC"]],
      });

      res.json(exerciseSets);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = sessionController;
