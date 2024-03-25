const unauthRoutes = require("./unauthRoutes");
const authRoutes = require("./authRoutes");

const { Router } = require("express");

const router = Router();

const authMiddleware = require("../middlewares/auth");

const unauthRouter = Router(); // Router pour les routes non-auth
unauthRouter.use("/", unauthRoutes);
router.use(unauthRouter); // Rattachement au router principal

const authRouter = Router(); // Router pour les routes auth
authRouter.use(authMiddleware); // Utilsation du middleware d'auth
authRouter.use("/", authRoutes);
router.use(authRouter); // Rattachement au router principal

module.exports = router;


// Middleware d'authentification pour les routes authentifiées
