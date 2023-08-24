const express = require("express");
const app = express();
const port = 3000;

const router = require('./router');
const sequelizeConnection = require('./models/connection');

//* Uncommented to reset DB
// const User = require("./models/User");
// const Bodypart = require('./models/Bodypart');
// const Exercise = require('./models/Exercise');
// const Session = require('./models/Session');
// const SessionExercise = require('./models/SessionExercise');
// const Set = require("./models/Set");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
