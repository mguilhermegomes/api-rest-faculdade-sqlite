const models = require("../database/models");

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }

  async resgatarTodosRegistros(options = {}) {
    return models[this.nomeModelo].findAll({ ...options });
  }

  async resgatarRegistrosPorEscopo(escopo, options = {}) {
    return models[this.nomeModelo].scope(escopo).findAll({ ...options });
  }

  async resgatarRegistroPorId(id) {
    return models[this.nomeModelo].findByPk(Number(id));
  }

  async resgatarRegistroEspecifico(where) {
    return models[this.nomeModelo].findOne({ where: { ...where } });
  }

  async resgatarRegistrosQuantidade(options = {}) {
    return models[this.nomeModelo].findAndCountAll({ ...options });
  }

  async criarRegistro(dados) {
    return models[this.nomeModelo].create(dados);
  }

  async atualizarRegistro(dados, where, transacao = null) {
    const options = {
      where: { ...where }
    };
    
    transacao ? options.transaction = transacao : null;
    const listaRegistrosAtualizados = await models[this.nomeModelo].update(dados, options);

    return listaRegistrosAtualizados[0] ? true : false;
  }

  async removerRegistro(where) {
    const registrosRemovidos = await models[this.nomeModelo].destroy({
      where: { ...where }
    });

    return registrosRemovidos ? true : false;
  }
}

module.exports = Services;