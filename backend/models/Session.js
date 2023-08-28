const { Model, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("./connection");
const User = require("./User");

class Session extends Model {
  static async createSession(userId) {
    const newSession = await this.create({ user_id: userId });
    return newSession;
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
  },
  {
    sequelize,
    tableName: "session",
  }
);

module.exports = Session;
