const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routers/router");
//const sequelizeConnection = require("./models/connection");

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "*",
    // origin: ["http://localhost:5173", "https://fitness-buddy-xi.vercel.app/"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});
