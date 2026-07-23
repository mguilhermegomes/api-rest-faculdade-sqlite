"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cursos", [
      {
        titulo: "API com Express",
        descricao: "Curso de API com Express e MongoDB",
        data_inicio: "2023-04-23",
        categoria_id: 1,
        docente_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "SpringBoot",
        descricao: "Curso de Java com Spring Framework",
        data_inicio: "2023-07-02",
        categoria_id: 2,
        docente_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Python Web com Django",
        descricao: "Curso de aplicações web com Django",
        data_inicio: "2023-11-14",
        categoria_id: 3,
        docente_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Orientação a Objetos com C#",
        descricao: "Curso de C#: coleções, arquivos e libs",
        data_inicio: "2024-02-07",
        categoria_id: 4,
        docente_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Páginas web com React",
        descricao: "Curso de React: componentes e hooks",
        data_inicio: "2024-08-11",
        categoria_id: 5,
        docente_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Evoluindo JavaScript com TypeScript",
        descricao: "Curso de TypeScript: types e interfaces",
        data_inicio: "2025-01-27",
        categoria_id: 6,
        docente_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Performance extrema com RUST",
        descricao: "Curso de RUST: performance extrema",
        data_inicio: "2025-06-09",
        categoria_id: 7,
        docente_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Programando com rapidez em GO",
        descricao: "Curso de GO: orientação a objetos, sintaxe limpa e entrega",
        data_inicio: "2025-12-18",
        categoria_id: 8,
        docente_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Desenvolvendo páginas web com PHP",
        descricao: "Curso de PHP: back-end e Lavarel",
        data_inicio: "2026-03-12",
        categoria_id: 9,
        docente_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Aplicações mobile para IOS com Swift",
        descricao: "Curso de Swift: aplicações mobile para IOS",
        data_inicio: "2026-07-02",
        categoria_id: 10,
        docente_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cursos", null, {});
  }
};
