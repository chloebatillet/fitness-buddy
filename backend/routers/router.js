const { Router } = require("express");
const router = Router();

const unauthRoutes = require("./unauthRoutes");
const authRoutes = require("./authRoutes");

const authMiddleware = require("../middlewares/auth");

const unauthRouter = Router();
unauthRouter.use("/", unauthRoutes);
router.use(unauthRouter);

// Middleware d'authentification pour les routes authentifiées
const authRouter = Router();
authRouter.use(authMiddleware);
authRouter.use("/", authRoutes);
router.use(authRouter);

module.exports = router;
