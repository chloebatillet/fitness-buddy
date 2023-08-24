const bcrypt = require("bcrypt");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const userController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email: email.toLowerCase() },
      });

      if (!user) {
        res
          .status(400)
          .json({ message: "No match found. Try to sign up instead." });
        // Message volontairement flou pour ne pas donné trop d'indication sur la bdd
        return;
      }

      const isMatching = await bcrypt.compare(password, user.password);

      if (!isMatching) {
        res
          .status(400)
          .json({ message: "No match found. Try to sign up instead." });
        // Message volontairement flou pour ne pas donné trop d'indication sur la bdd
        return;
      }

      // attribution d'un token
      const token = jwt.sign({ userId: user.id }, process.env.SECRETTOKEN, {
        expiresIn: process.env.EXPIREDATETOKEN,
      });

      res.send({ message: "Logged in", user, token: token });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  signup: async (req, res) => {
    try {
      console.log(req.body);
      const { firstname, lastname, email, password } = req.body;

      if (!firstname || !lastname || !email || !password) {
        res.status(400).json({ error: "All fields should be completed." });
        return;
      }

      if (!validator.validate(email)) {
        res.status(400).json({ error: "Invalid email" });
        return;
      }

      const alreadyExists = await User.findOne({ where: { email: email } });

      if (alreadyExists) {
        res.status(400).json({ error: "This email is already used." });
        return;
      }

      // Cryptage du mdp
      const saltRounds = parseInt(process.env.SALT_ROUNDS);
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = await User.create({ ...req.body, password: hashedPassword });
      console.log(user.getFullname());

      res.json({ message: "Account created!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      // gestion d'erreur
      const user = await User.findByPk(id);

      if (!user) {
        res.status(404).json({error: "Account not found"});
        return;
      }

      await user.destroy();

      res.status(202).json({ message: "Account deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
