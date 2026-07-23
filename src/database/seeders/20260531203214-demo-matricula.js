"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("matriculas", [
      {
        estudante_id: 1,
        curso_id: 1,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 2,
        curso_id: 2,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 3,
        curso_id: 3,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 4,
        curso_id: 4,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 5,
        curso_id: 5,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 6,
        curso_id: 6,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 7,
        curso_id: 7,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 8,
        curso_id: 8,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 1,
        curso_id: 9,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 2,
        curso_id: 10,
        status: "matriculado",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("matriculas", null, {});
  }
};
