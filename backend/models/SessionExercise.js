const { Model, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("./connection");
const Session = require("./Session");
const Exercise = require("./Exercise");

class SessionExercise extends Model {
  // static associate(models) {
  //   SessionExercise.hasMany(models.Set, /*{foreignKey: "sessionExercise_id"}*/)
  // }
}

SessionExercise.init(
  {
    session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Session,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Exercise,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  {
    sequelize,
    tableName: "sessionExercise",
  }
);

module.exports = SessionExercise;
