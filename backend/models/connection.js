require("dotenv").config();

const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000,
  // },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connection: OK");
  })
  //* Uncomment to reset DB
  // .then(async () => {
  //   await sequelize.sync(/*{ force: true }*/);
  //   console.log("All models were synchronized successfully.");
  // })
  .catch((error) => {
    console.error(error);
  });

module.exports = sequelize;
