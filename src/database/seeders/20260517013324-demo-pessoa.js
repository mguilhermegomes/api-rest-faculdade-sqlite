"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pessoas", [
      {
        nome: "Solange",
        email: "solange@email.com",
        cpf: "63058133022",
        ativo: true,
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Igor",
        email: "igor@email.com",
        cpf: "99018205028",
        ativo: true,
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Aline",
        email: "aline@email.com",
        cpf: "92797497066",
        ativo: true,
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Fernando",
        email: "fernando@email.com",
        cpf: "17195730000",
        ativo: true,
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Douglas",
        email: "douglas@email.com",
        cpf: "29157349530",
        ativo: true,
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Cibele",
        email: "cibele@email.com",
        cpf: "72693510871",
        ativo: true,
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Pedro",
        email: "pedro@email.com",
        cpf: "10418957232",
        ativo: true,
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Estela",
        email: "estela@email.com",
        cpf: "59398794821",
        ativo: true,
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Sebastião",
        email: "tiaodograo@email.com",
        cpf: "06946507061",
        ativo: true,
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Dalva",
        email: "dalva@email.com",
        cpf: "80941142078",
        ativo: true,
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Pablo",
        email: "pablo@email.com",
        cpf: "36385139370",
        ativo: true,
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Mavalda",
        email: "mavalda@email.com",
        cpf: "47182231546",
        ativo: true,
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pessoas", null, {});
  }
};
