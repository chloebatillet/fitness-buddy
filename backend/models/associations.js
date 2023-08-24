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

Session.belongsToMany(Exercise, { through: SessionExercise });
Exercise.belongsToMany(Session, { through: SessionExercise });

SessionExercise.hasMany(Set, {
  foreignKey: "sessionExercise_id",
});
Set.belongsTo(SessionExercise, {
  foreignKey: "sessionExercise_id",
});

module.exports = {
  User,
  Session,
  Exercise,
  Bodypart,
  SessionExercise,
  Set,
};
