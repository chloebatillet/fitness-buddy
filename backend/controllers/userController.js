const bcrypt = require("bcrypt");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");

const { User } = require("../models/all");

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
          .json({ error: "No match found. Try to sign up instead." });
        // Message volontairement flou pour ne pas donné trop d'indication sur la bdd
        return;
      }

      const isMatching = await bcrypt.compare(password, user.password);

      if (!isMatching) {
        res
          .status(400)
          .json({ error: "No match found. Try to sign up instead." });
        // Message volontairement flou pour ne pas donné trop d'indication sur la bdd
        return;
      }

      // attribution d'un token
      const token = jwt.sign({ userId: user.id }, process.env.SECRETTOKEN, {
        expiresIn: process.env.EXPIREDATETOKEN,
      });

      res.json({ message: "Logged in", user, token: token });
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

      await User.create({ ...req.body, password: hashedPassword });

      res.json({ message: "Account created! Please log in now." });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  edit: async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id);
      await user.editInfo(req.body);

      res.json({ user, message: "Your profile is up-to-date!" });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  changePwd: async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id);

      if (!user) {
        res.status(404).json({ error: "Account not found" });
        return;
      }

      const isMatching = await bcrypt.compare(
        req.body.current_password,
        user.password
      );

      if (!isMatching) {
        res.status(400).json({ error: "Invalid password." });
        return;
      }

      const hashedPassword = await bcrypt.hash(
        req.body.new_password,
        parseInt(process.env.SALT_ROUNDS)
      );

      await user.update({ password: hashedPassword });

      res.status(200).json({ message: "Your password is changed!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  delete: async (req, res) => {
    try {
      console.log('body', req.body);
      const user = await User.findByPk(req.user.id);

      if (!user) {
        res.status(404).json({ error: "Account not found" });
        return;
      }

      const isMatching = await bcrypt.compare(req.body.password, user.password);
      if (!isMatching) {
        res.status(400).json({ error: "Invalid password." });
        return;
      }

      await user.destroy();

      res.status(202).json({ message: "Account deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
