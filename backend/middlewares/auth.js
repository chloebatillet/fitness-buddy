/**
 * Middleware à passer sur toutes les routes où il faut être authentifié
 */

const jwt = require("jsonwebtoken");
// const { User } = require("../models");
const { User } = require("../models/all");

const authMiddleware = async (req, res, next) => {
  // Vérification de la présence d'un token
  const token = req.headers.authorization;

  if (!token)
    return res
      .status(401)
      .json({ auth: false, error: "You are not authorized to see this!" });

  // Extraction du JWT du format "Bearer <token>"
  const jwtToken = token.split(" ")[1];

  // Décrypter le token grâce à la clé secrète
  jwt.verify(jwtToken, process.env.SECRETTOKEN, async (err, decoded) => {
    if (err)
      return res
        .status(403)
        .json({ auth: false, error: "Your token is not valid" });

    // Vérification qu'un user en BDD possède cet id
    const user = await User.findOne({ where: { id: decoded.userId } });

    if (!user)
      return res
        .status(403)
        .json({ auth: false, error: "Your token is not valid" });

    // Stockage des informations du user dans le req.
    req.user = user;

    // Passage au middleware suivant ou controller
    next();
  });
};

module.exports = authMiddleware;
