const Exercise = require("../models/Exercise");

const exerciseController = {
  getAll: async (req, res) => {
    try {
      const exerciseList = await Exercise.findAll();

      res.json(exerciseList);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  add: async (req, res) => {
    try {
      // verifier si le NOM existe déjà
      await Exercise.create()
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  update: async (req, res) => {
    try {
      // verifier si le NOM existe déjà
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  delete: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = exerciseController;
