const express = require("express");
const app = express();
const port = 3000;

const router = require("./routers/router");
const sequelizeConnection = require("./models/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
