const { Bodypart, Exercise } = require("../models/index");

const favouriteController = {
  getAll: async (req, res) => {
    try {
      const exerciseList = await Bodypart.findAll({
        include: { association: "exercises", attributes: ["id", "name"] },
        order: [
          ["name", "ASC"],
          ["exercises", "name", "ASC"],
        ],
        attributes: ["id", "name"],
      });

      res.json(exerciseList);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  add: async (req, res) => {
    try {
      const { name, bodypart_id } = req.body;

      const alreadyExists = await Exercise.findOne({
        where: { name: name.toLowerCase() },
      });

      if (alreadyExists) {
        res.status(400).json({ error: "This exercise already exists" });
        return;
      }

      await Exercise.create({
        name: name.toLowerCase(),
        bodypart_id: parseInt(bodypart_id),
      });

      res.status(201).json({ message: "Exercise added!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  delete: async (req, res) => {
    try {
      const exerciseToDelete = await Exercise.findByPk(req.params.id);

      console.log(exerciseToDelete);
      if (!exerciseToDelete) {
        res.status(404).json({ error: "Exercise not found." });
        return;
      }

      await exerciseToDelete.destroy();

      res.status(202).json({ message: "Exercise deleted!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = favouriteController;
