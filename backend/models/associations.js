const Bodypart = require("./Bodypart");
const Exercise = require("./Exercise");
const Favourite = require("./Favourite");
const Session = require("./Session");
const SessionExercise = require("./SessionExercise");
const Set = require("./Set");
const User = require("./User");

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
  as: "exercise_sets",
});
Set.belongsTo(SessionExercise, {
  foreignKey: "session_exercise_id",
  as: "exercise_name_set",
});

Exercise.hasMany(SessionExercise, {
  foreignKey: "exercise_id",
  as: "exercise_details",
});
SessionExercise.belongsTo(Exercise, {
  foreignKey: "exercise_id",
  as: "exercise_name",
});

User.belongsToMany(Exercise, {
  foreignKey: "user_id",
  through: "favourites",
});

Exercise.belongsToMany(User, {
  foreignKey: "exercise_id",
  through: "favourites",
});

module.exports = {
  Bodypart,
  Exercise,
  Favourite,
  Session,
  SessionExercise,
  Set,
  User,
};
