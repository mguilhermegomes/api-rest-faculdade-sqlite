const ErroBase = require("./ErroBase.js");

class ErroRequisicaoInvalida extends ErroBase {
  constructor(mensagem = "Um ou mais valores fornecidos estão incorretos") {
    super(mensagem, 400);
  }
}

module.exports = ErroRequisicaoInvalida;