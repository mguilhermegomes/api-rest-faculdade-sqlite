const ErroBase = require("./ErroBase.js");

class ErroRestricao extends ErroBase {
  constructor(mensagem = "Um ou mais valores informados já existem no sistema") {
    super(mensagem);
  }
}

module.exports = ErroRestricao;