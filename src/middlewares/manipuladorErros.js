const {
  ForeignKeyConstraintError,
  UniqueConstraintError,
  ValidationError,
} = require("sequelize");

const ErroBase = require("../errors/ErroBase.js");
const ErroFK = require("../errors/ErroFK.js");
const ErroRestricao = require("../errors/ErroRestricao.js");
const ErroValidacao = require("../errors/ErroValidacao.js");
const ErroRequisicaoInvalida = require("../errors/ErroRequisicaoInvalida.js");
const ErroNaoEncontrado = require("../errors/ErroNaoEncontrado.js");

// eslint-disable-next-line no-unused-vars
function manipuladorErros(err, req, res, next) {
  if (err instanceof ForeignKeyConstraintError) {
    return new ErroFK().enviarResposta(res);
  }

  if (err instanceof UniqueConstraintError) {
    return new ErroRestricao().enviarResposta(res);
  }

  if (err instanceof ValidationError) {
    return new ErroValidacao(err).enviarResposta(res);
  }

  if (err instanceof ErroRequisicaoInvalida) {
    return err.enviarResposta(res);
  }

  if (err instanceof ErroNaoEncontrado) {
    return err.enviarResposta(res);
  }

  if (err instanceof ErroBase) {
    return new ErroBase().enviarResposta(res);
  }

  return new ErroBase().enviarResposta(res);
}

module.exports = manipuladorErros;
