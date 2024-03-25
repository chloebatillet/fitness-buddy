const { Model, DataTypes } = require("sequelize");
const sequelize = require("./connection");

class Bodypart extends Model {
  // static associate(models) {
  //   this.hasMany(models.Exercise, {
  //     foreignKey: "bodypart_id",
  //     as: "exercises",
  //   });
  // }
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
