"use strict";
/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cursos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "categorias", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "pessoas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cursos");
  }
};