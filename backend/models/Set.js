const { Model, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("./connection");
const SessionExercise = require("./SessionExercise");

class Set extends Model {
  // static associate(models) {
  //   Set.belongsTo(models.SessionExercise, {
  //     foreignKey: "sessionExercise_id",
  //   });
  // }
}

Set.init(
  {
    session_exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SessionExercise,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    nb_reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight_lifted: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "set",
  }
);

module.exports = Set;
