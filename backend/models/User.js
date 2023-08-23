const { Model, DataTypes } = require("sequelize");
const sequelize = require("./connection");

class User extends Model {
  static associate(models) {
    User.hasMany(models.Session)
  }
}

User.init(
  {
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // thumbnail: {
    //   type: DataTypes.TEXT,
    // },
    // slug: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    tableName: "user",
  }
);

module.exports = User;
