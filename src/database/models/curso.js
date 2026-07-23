"use strict";

const validarMaiorQueZero = require("../../utils/helpers/validarMaiorQueZero.js");

const {
  Model,
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.hasMany(models.Matricula, {
        foreignKey: "curso_id"
      });
      Curso.belongsTo(models.Pessoa, {
        foreignKey: "docente_id"
      });
      Curso.belongsTo(models.Categoria, {
        foreignKey: "categoria_id"
      });
    }
  }
  Curso.init({
    titulo: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[\p{L}\s#.-]+$/u,
          msg: "O titulo da curso deve conter apenas letras, acentos, espaços e os seguintes caracteres especiais: # . -"
        },
        len: {
          args: [4, 60],
          msg: "O titulo do curso deve ter entre 4 a 60 caracteres"
        }
      }
    },
    descricao: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[\p{L}\s#.-]+$/u,
          msg: "A descrição de conter apenas letras, acentos, espaços e os seguintes caracteres especiais: # . -"
        },
        len: {
          args: [10, 200],
          msg: "A descrição deve ter entre 10 a 200 caracteres"
        }
      }
    },
    data_inicio: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
        is: {
          args: /^\d{4}-\d{2}-\d{2}$/,
          msg: "A data deve seguir o formato XXXX-XX-XX (ANO-MÊS-DIA)"
        }
      }
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "O ID da categoria deve ser um número inteiro"
        },
        isPositivo: (value) => {
          validarMaiorQueZero(value, "O ID da categoria deve ser maior que 0");
        }
      }
    },
    docente_id: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "O ID do docente deve ser um número inteiro"
        },
        isPositivo: (value) => {
          validarMaiorQueZero(value, "O ID do docente deve ser maior que 0");
        }
      }
    }
  }, {
    sequelize,
    modelName: "Curso",
    tableName: "cursos",
    hooks: {
      beforeValidate(curso) {
        if (curso.titulo) curso.titulo = curso.titulo.trim();
        if (curso.descricao) curso.descricao = curso.descricao.trim();
        if (curso.data_inicio && typeof curso.data_inicio === "string") {
          curso.data_inicio = curso.data_inicio.trim();
        }
      }
    },
    paranoid: true
  });
  return Curso;
};