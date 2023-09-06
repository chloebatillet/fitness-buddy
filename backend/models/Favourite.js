const { Model, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("./connection");
const Exercise = require("./Exercise");
const User = require("./User");

class Favourites extends Model {
  // static async add(sessionId, exerciseId) {
  //   const sessionExercise = await this.create({
  //     session_id: parseInt(sessionId),
  //     exercise_id: parseInt(exerciseId),
  //   });
  //   return sessionExercise;
  // }
}

Favourites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
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
    tableName: "favourites",
  }
);

module.exports = Favourites;
