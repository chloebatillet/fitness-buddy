const { Model, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("./connection");
const Session = require("./Session");
const Exercise = require("./Exercise");

class SessionExercise extends Model {
  static async addExercise(sessionId, exerciseId) {
    const sessionExercise = await this.create({
      session_id: parseInt(sessionId),
      exercise_id: parseInt(exerciseId),
    });
    console.log(sessionExercise);
    return sessionExercise;
  }
}

SessionExercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
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
    tableName: "session_exercise",
  }
);

module.exports = SessionExercise;
