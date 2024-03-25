"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bodypart", [
      {
        name: "back",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "chest",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "arms",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "core",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "legs",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bodypart", null, {});
  },
};
