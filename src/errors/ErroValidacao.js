const ErroBase = require("./ErroBase.js");

class ErroValidacao extends ErroBase {
  constructor(err) {
    const mensagemErro = Object.values(err.errors).map((e) => e.message).join("; ");
    super(mensagemErro, 400);
  }
}

module.exports = ErroValidacao;