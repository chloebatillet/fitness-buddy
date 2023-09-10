require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connection: OK");
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = sequelize;
