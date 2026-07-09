"use strict";

const { ValidationError } = require("sequelize");
const validarCpf = require("../../utils/helpers/validarCpf.js");

const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: "docente_id"
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: "estudante_id",
        as: "todasMatriculas"
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: "estudante_id",
        scope: {
          status: "matriculado"
        },
        as: "matriculasAtivas"
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: "estudante_id",
        scope: {
          status: "cancelado"
        },
        as: "matriculasCanceladas"
      });
    }
  }
  Pessoa.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 30],
          msg: "O nome deve ter no minímo 2 caracteres e no máximo 30 caracteres"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Formato de email inválido."
        }
      },
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isCpf: (cpf) => {
          if (!validarCpf(cpf)) throw new ValidationError("CPF Inválido");
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Pessoa",
    tableName: "pessoas",
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true,
      }
    },
    scopes: {
      todasPessoas: {
        where: {},
      }
    }
  });
  return Pessoa;
};