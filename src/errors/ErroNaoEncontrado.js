const ErroBase = require("./ErroBase");

class ErroNaoEncontrado extends ErroBase {
  constructor(mensagem = "Um ou mais recursos não foram encontrados") {
    super(mensagem, 404);
  }
}

module.exports = ErroNaoEncontrado;