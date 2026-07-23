"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Curso, {
        foreignKey: "categoria_id"
      });
    }
  }
  Categoria.init({
    titulo: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        is: {
          args: /^[\p{L}\s#.-]+$/u,
          msg: "O nome deve conter apenas letras, acentos, espaços e os seguintes caracteres especiais: # . -"
        },
        len: {
          args: [2, 20],
          msg: "O titulo da categoria deve ter entre 2 a 20 caracteres"
        }
      }
    }
  }, {
    sequelize,
    modelName: "Categoria",
    tableName: "categorias",
    hooks: {
      beforeValidate(categoria) {
        if (categoria.titulo) categoria.titulo = categoria.titulo.toLowerCase().trim();
      }
    },
    paranoid: true
  });
  return Categoria;
};