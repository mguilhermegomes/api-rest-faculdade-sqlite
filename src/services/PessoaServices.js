const models = require("../database/models");
const Services = require("./Services.js");

class PessoaServices extends Services {
  constructor() {
    super("Pessoa");
    this.matriculaServices = new Services("Matricula");
  }

  async resgatarTodasPessoas(options = {}) {
    const listaTodasPessoas = await super.resgatarRegistrosPorEscopo(
      "todasPessoas", options
    );
    return listaTodasPessoas;
  }

  async resgatarMatriculasEstudante(id, options = {}) {
    const estudante = await super.resgatarRegistroPorId(Number(id));
    const listaMatriculas = await estudante.getTodasMatriculas({ ...options });
    return listaMatriculas;
  }

  async resgatarMatriculasAtivasEstudante(id, options = {}) {
    const estudante = await super.resgatarRegistroPorId(Number(id));
    const listaMatriculas = await estudante.getMatriculasAtivas({ ...options });
    return listaMatriculas;
  }

  async resgatarMatriculasCanceladasEstudante(id, options = {}) {
    const estudante = await super.resgatarRegistroPorId(Number(id));
    const listaMatriculasCanceladas = await estudante.getMatriculasCanceladas({ ...options });
    return listaMatriculasCanceladas;
  }

  async cancelarEstudanteEMatriculas(estudante_id) {
    return models.sequelize.transaction(async (transacao) => {
      await super.atualizarRegistro(
        { ativo: false },
        { id: estudante_id },
        transacao,
      );
      await this.matriculaServices.atualizarRegistro(
        { status: "cancelado" },
        { estudante_id: estudante_id },
        transacao,
      );
    });
  }
}

module.exports = PessoaServices;
