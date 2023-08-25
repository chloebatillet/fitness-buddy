const { Model, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("./connection");
const Bodypart = require("./Bodypart");

class Exercise extends Model {}

Exercise.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bodypart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Bodypart,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  {
    sequelize,
    tableName: "exercise",
  }
);

module.exports = Exercise;
