const ErroNaoEncontrado = require("../errors/ErroNaoEncontrado.js");

module.exports = (req, res, next) => {
  const erro = new ErroNaoEncontrado("Página não encontrada");
  next(erro);
};