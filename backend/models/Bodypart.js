const { Model, DataTypes } = require("sequelize");
const sequelize = require("./connection");

class Bodypart extends Model {
  static associate(models) {
    Bodypart.hasMany(models.Exercise)
  }
}

Bodypart.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "bodypart",
  }
);

module.exports = Bodypart;
