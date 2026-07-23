"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categorias", [
      {
        titulo: "node.js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "java",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "python",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "c#",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "react",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "typeScript",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "rust",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "go",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "php",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "swift",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", null, {});
  }
};
