const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routers/router");
//const sequelizeConnection = require("./models/connection");

// Initialisation du serveur express
const app = express();
const port = process.env.PORT;

// URL autorisées à consulter l'API
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Déclaration de l'utilsation du router
app.use(router);

// Lancement de l'écoute sur le port défini
app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});
