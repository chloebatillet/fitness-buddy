const { Exercise, User, Favourite } = require("../models/all");

const favouriteController = {
  getAll: async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id);

      const favourites = await user.getFavouriteExercises({
        attributes: ["id", "name"],
        joinTableAttributes: [],
      });

      res.json(favourites);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  add: async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id);
      await user.addFavouriteExercises(req.params.id);

      res.status(201).json({ message: "Exercise added to favourites!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  delete: async (req, res) => {
    try {
      const favouriteToDelete = await Favourite.findOne({
        where: { exercise_id: req.params.id, user_id: req.user.id},
      });
      
      if (!favouriteToDelete) {
        res.status(404).json({ error: "Exercise not found." });
        return;
      }

      await favouriteToDelete.destroy();

      res.status(202).json({ message: "Exercise deleted from favourites!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = favouriteController;
