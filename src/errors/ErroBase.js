class ErroBase {
  constructor(mensagem = "Erro interno do servidor", status = 500) {
    this.mensagem = mensagem;
    this.status = status;
  }

  enviarResposta(res) {
    res.status(this.status).send("Erro(s): " + this.mensagem);
  }
}

module.exports = ErroBase;
