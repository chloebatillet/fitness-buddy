const User = require("./User");
const Session = require("./Session");
const Exercise = require("./Exercise");
const Bodypart = require("./Bodypart");
const SessionExercise = require("./SessionExercise");
const Set = require("./Set");

// Associations
User.hasMany(Session);
Session.belongsTo(User);

Exercise.belongsTo(Bodypart, {
  foreignKey: "bodypart_id",
  as: "exercise_category",
});
Bodypart.hasMany(Exercise, {
  foreignKey: "bodypart_id",
  as: "exercises",
});

Session.belongsToMany(Exercise, {
  foreignKey: "session_id",
  through: SessionExercise,
});
Exercise.belongsToMany(Session, {
  foreignKey: "exercise_id",
  through: SessionExercise,
});

SessionExercise.hasMany(Set, {
  foreignKey: "session_exercise_id",
  as: "sets"
});
Set.belongsTo(SessionExercise, {
  foreignKey: "session_exercise_id",
});

Exercise.hasMany(SessionExercise, {
  foreignKey: "exercise_id",
  as: "azertyuiop",
});
SessionExercise.belongsTo(Exercise, {
  foreignKey: "exercise_id",
  as: "exercise_name",
});

module.exports = {
  User,
  Session,
  Exercise,
  Bodypart,
  SessionExercise,
  Set,
};
