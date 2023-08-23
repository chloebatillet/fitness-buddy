const express = require("express");
const app = express();
const port = 3000;

const sequelizeConnection = require('./models/connection');

const User = require("./models/User");
const Bodypart = require('./models/Bodypart');
const Exercise = require('./models/Exercise');
const Session = require('./models/Session');
const SessionExercise = require('./models/SessionExercise');
const Set = require("./models/Set");


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
