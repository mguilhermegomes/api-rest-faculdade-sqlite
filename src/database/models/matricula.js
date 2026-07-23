"use strict";

const validarMaiorQueZero = require("../../utils/helpers/validarMaiorQueZero.js");

const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matricula.belongsTo(models.Pessoa, {
        foreignKey: "estudante_id"
      });
      Matricula.belongsTo(models.Curso, {
        foreignKey: "curso_id"
      });
    }
  }
  Matricula.init({
    status: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["matriculado", "cancelado"]],
          msg: "O status da matricula deve ser matriculado ou cancelado"
        }
      }
    },
    estudante_id: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "O ID do estudante deve ser um número inteiro"
        },
        isPositivo: (value) => {
          validarMaiorQueZero(value, "O ID do estudante deve ser maior que 0");
        }
      }
    },
    curso_id: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "O ID do docente deve ser um número inteiro"
        },
        isPositivo: (value) => {
          validarMaiorQueZero(value, "O ID do docente deve ser maior que zero");
        }
      }
    }
  }, {
    sequelize,
    modelName: "Matricula",
    tableName: "matriculas",
    hooks: {
      beforeValidate(matricula) {
        if (matricula.status) matricula.status = matricula.status.toLowerCase().trim();
      }
    },
    paranoid: true
  });
  return Matricula;
};