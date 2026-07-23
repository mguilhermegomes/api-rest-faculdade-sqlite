const pessoas = require("./entidades/pessoas.js");
const categorias = require("./entidades/categorias.js");
const cursos = require("./entidades/cursos.js");
const matriculas = require("./entidades/matriculas.js");

module.exports = {
  ...pessoas,
  ...categorias,
  ...cursos,
  ...matriculas,
};