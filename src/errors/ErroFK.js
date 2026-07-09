const ErroBase = require("./ErroBase.js");

class ErroFK extends ErroBase {
  constructor(mensagem = "Violação de chave estrangeira. Um ou mais valores informados não existem no sistema.") {
    super(mensagem);
  }
}

module.exports = ErroFK;