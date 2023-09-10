const sequelize = require("./models/connection");
const {
  Bodypart,
  Exercise,
  Favourite,
  Session,
  SessionExercise,
  Set,
  User,
} = require("./models/all");

async function resetDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log("Database reset completed.");
  } catch (error) {
    console.error("Database reset error:", error);
  } finally {
    sequelize.close();
  }
}

resetDatabase();
