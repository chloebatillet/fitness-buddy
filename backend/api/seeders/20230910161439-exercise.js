"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      /* LEGS ----------------------*/
      const legs = await queryInterface.rawSelect(
        "bodypart",
        {
          where: { name: "legs" },
        },
        ["id"]
      );

      await queryInterface.bulkInsert("exercise", [
        {
          name: "squat",
          bodypart_id: legs,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "front squat",
          bodypart_id: legs,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "pistol squat",
          bodypart_id: legs,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "fentes",
          bodypart_id: legs,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "leg extension",
          bodypart_id: legs,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "presse",
          bodypart_id: legs,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "prone leg curl",
          bodypart_id: legs,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "leg curl",
          bodypart_id: legs,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "leg adduction",
          bodypart_id: legs,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);


      /* BACK ----------------------*/
      const back = await queryInterface.rawSelect(
        "bodypart",
        {
          where: { name: "back" },
        },
        ["id"]
      );

      await queryInterface.bulkInsert("exercise", [
        {
          name: "deadlift",
          bodypart_id: back,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "seated cable row",
          bodypart_id: back,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "seated vertical row",
          bodypart_id: back,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "banc à lombaires",
          bodypart_id: back,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "rowing bar",
          bodypart_id: back,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "tractions",
          bodypart_id: back,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "superman",
          bodypart_id: back,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);

      /* CHEST ----------------------*/
      const chest = await queryInterface.rawSelect(
        "bodypart",
        {
          where: { name: "chest" },
        },
        ["id"]
      );

      await queryInterface.bulkInsert("exercise", [
        {
          name: "développé militaire",
          bodypart_id: chest,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "push up",
          bodypart_id: chest,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "chest press",
          bodypart_id: chest,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "développé couché",
          bodypart_id: chest,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);

      /* ARMS ----------------------*/
      const arms = await queryInterface.rawSelect(
        "bodypart",
        {
          where: { name: "arms" },
        },
        ["id"]
      );

      await queryInterface.bulkInsert("exercise", [
        {
          name: "curl bar",
          bodypart_id: arms,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "curl haltères",
          bodypart_id: arms,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "curl poulie",
          bodypart_id: arms,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "extension nuque",
          bodypart_id: arms,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);

      /* CORE ----------------------*/
      const core = await queryInterface.rawSelect(
        "bodypart",
        {
          where: { name: "core" },
        },
        ["id"]
      );


      await queryInterface.bulkInsert("exercise", [
        {
          name: "crunch banc",
          bodypart_id: core,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "gainage",
          bodypart_id: core,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "sit ups",
          bodypart_id: core,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "stomach vacuum",
          bodypart_id: core,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "crunch poulie",
          bodypart_id: core,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);

  
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("exercise", null, {});
  },
};
