const { Model, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("./connection");
const User = require("./User");

class Session extends Model {
  static associate(models) {
    Session.belongsTo(models.User);
    Session.belongsToMany(models.Exercise, {through: models.SessionExercise})
  }
}

Session.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "session",
  }
);

module.exports = Session;
