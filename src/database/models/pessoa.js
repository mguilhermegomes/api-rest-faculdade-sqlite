"use strict";

const validarCpf = require("../../utils/helpers/validarCpf.js");

const {
  Model,
  ValidationError
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
        is: {
          args: /^[\p{L}\s]+$/u,
          msg: "O nome deve conter apenas letras, acentos e espaços"
        },
        len: {
          args: [2, 30],
          msg: "O nome deve ter no minímo 2 caracteres e no máximo 30 caracteres"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Formato de email inválido."
        }
      },
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isCpf: (cpf) => {
          if (!validarCpf(cpf)) throw new ValidationError("CPF Inválido");
        }
      }
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      validate: {
        isBoolean: (value) => {
          if (value !== true && value !== false && value !== "true" && value !== "false") {
            throw new ValidationError("Ativo deve receber apenas true ou false");
          }
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["estudante", "docente"]],
          msg: "Os cargos permitidos são de apenas estudante e docente"
        }
      }
    }
  }, {
    sequelize,
    modelName: "Pessoa",
    tableName: "pessoas",
    hooks: {
      beforeValidate(pessoa) {
        if (pessoa.nome) pessoa.nome = pessoa.nome.trim();
        if (pessoa.email) pessoa.email = pessoa.email.toLowerCase().trim();
        if (pessoa.cpf) pessoa.cpf = pessoa.cpf.trim();
        if (pessoa.role) pessoa.role = pessoa.role.toLowerCase().trim();
      }
    },
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