"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      "bodypart",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "bodypart",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "bodypart_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );

    await queryInterface.createTable(
      "exercise",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        bodypart_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "bodypart",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "exercise",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "exercise_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );

    await queryInterface.createTable(
      "favourite",
      {
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "user",
            key: "id",
          },
        },
        exercise_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "exercise",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "favourite",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "favourite_pkey",
            unique: true,
            fields: [{ name: "user_id" }, { name: "exercise_id" }],
          },
        ],
      }
    );

    await queryInterface.createTable(
      "session_exercise",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        session_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "session",
            key: "id",
          },
          unique: "session_exercise_session_id_exercise_id_key",
        },
        exercise_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "exercise",
            key: "id",
          },
          unique: "session_exercise_session_id_exercise_id_key",
        },
      },
      {
        sequelize,
        tableName: "session_exercise",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "session_exercise_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
          {
            name: "session_exercise_session_id_exercise_id_key",
            unique: true,
            fields: [{ name: "session_id" }, { name: "exercise_id" }],
          },
        ],
      }
    );

    await queryInterface.createTable(
      "session",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "user",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "session",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "session_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );

    await queryInterface.createTable(
      "set",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        session_exercise_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "session_exercise",
            key: "id",
          },
        },
        nb_reps: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        weight_lifted: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "set",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "set_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );

    await queryInterface.createTable(
      "user",
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
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
      },
      {
        sequelize,
        tableName: "user",
        schema: "public",
        timestamps: true,
        indexes: [
          {
            name: "user_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("bodypart");
    await queryInterface.dropTable("exercise");
    await queryInterface.dropTable("favourite");
    await queryInterface.dropTable("session_exercise");
    await queryInterface.dropTable("session");
    await queryInterface.dropTable("set");
    await queryInterface.dropTable("user");
  },
};
