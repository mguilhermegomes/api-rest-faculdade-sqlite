const converterStringParaNumero = require("../utils/helpers/converterStringParaNumero.js");

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async listarTodosRegistros(req, res, next) {
    try {
      const listaRecursos = await this.entidadeService.resgatarTodosRegistros(req.paginacao);
      return listaRecursos.length > 0
        ? res.status(200).json(listaRecursos)
        : res.status(404).send("Nenhum recurso registrado");
    } catch (err) {
      next(err);
    }
  }

  async listarRegistroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const recursoEncontrado = await this.entidadeService.resgatarRegistroPorId(id);
      return recursoEncontrado !== null
        ? res.status(200).json(recursoEncontrado)
        : res.status(404).send("ID não encontrado");
    } catch (err) {
      next(err);
    }
  }

  async listarRegistroEspecifico(req, res, next) {
    const { ...params } = req.params;
    const where = converterStringParaNumero(params);

    try {
      const registroEncontrado = await this.entidadeService.resgatarRegistroEspecifico(where);
      res.status(200).json(registroEncontrado);
    } catch (err) {
      next(err);
    }
  }

  async novoRegistro(req, res, next) {
    try {
      const dados = req.body;
      const novoRegistro = await this.entidadeService.criarRegistro(dados);
      res.status(200).json(novoRegistro);
    } catch (err) {
      next(err);
    }
  }

  async atualizarRegistro(req, res, next) {
    const { ...params } = req.params;
    const dados = req.body;
    const where = converterStringParaNumero(params);

    try {
      const registroFoiAtualizado = await this.entidadeService.atualizarRegistro(dados, where);
      registroFoiAtualizado
        ? res.status(200).send("Registro atualizado com sucesso!")
        : res.status(400).send("Não foi possível atualizar o registro");
    } catch (err) {
      next(err);
    }
  }

  async removerRegistro(req, res, next) {
    const { ...params } = req.params;
    const where = converterStringParaNumero(params);

    try {
      const registroFoiRemovido = await this.entidadeService.removerRegistro(where);
      registroFoiRemovido
        ? res.status(200).send("Registro removido com sucesso")
        : res.status(404).send("ID não localizado");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;