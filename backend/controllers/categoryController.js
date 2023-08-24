const { Bodypart } = require("../models/index");

const categoryController = {
  getAll: async (req, res) => {
    try {
      const categoryList = await Bodypart.findAll();

      res.json(categoryList);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  add: async (req, res) => {
    try {
      // console.log(Object.entries(req.body));
      // verifier si le NOM existe déjà
      const alreadyExists = await Bodypart.findOne({
        where: { name: req.body.name.toLowerCase() },
      });

      if (alreadyExists) {
        res.status(400).json({ error: "This category already exists" });
        return;
      }

      await Bodypart.create({ name: req.body.name.toLowerCase() });

      res.status(201).json({ message: "Category added!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  update: async (req, res) => {
    try {
      // verifier si le NOM existe déjà
      const alreadyExists = await Bodypart.findOne({
        where: { name: req.body.name.toLowerCase() },
      });

      if (alreadyExists) {
        res.status(400).json({ error: "This category already exists" });
        return;
      }

      await Bodypart.update(
        { name: req.body.name.toLowerCase() },
        {
          where: { id: req.params.id },
        }
      );

      res.status(200).json("Category updated!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  delete: async (req, res) => {
    try {
      const categoryToDelete = await Bodypart.findByPk(req.params.id);

      if (!categoryToDelete) {
        res.status(404).json({ error: "Category not found." });
        return;
      }

      await categoryToDelete.destroy();

      res.status(202).json({ message: "Category deleted!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = categoryController;
