const { Model, DataTypes } = require("sequelize");
const sequelize = require("./connection");

class User extends Model {
  getFullname() {
    return [this.firstname, this.lastname].join(" ");
  }

  async editInfo(dataToTransform) {
    let data = {};

    for (const key in dataToTransform) {
      if (dataToTransform[key].trim().length !== 0) {
        data[key] = dataToTransform[key];
      }
    }

    await this.update(data);
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
    //* pas utile pour le moment
    // thumbnail: {
    //   type: DataTypes.TEXT,
    // },
    //* voir dans une prochaine version pour afficher les profils d'autres utilisateurs
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
