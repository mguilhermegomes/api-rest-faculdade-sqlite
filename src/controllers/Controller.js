class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async listarTodosRegistros(req, res, next) {
    const options = {
      where: {
        ...req.busca
      },
      ...req.paginacao
    };

    try {
      const listaRecursos = await this.entidadeService.resgatarTodosRegistros(options);
      return listaRecursos.length > 0
        ? res.status(200).json(listaRecursos)
        : res.status(200).send("Nenhum recurso registrado");
    } catch (err) {
      next(err);
    }
  }

  async listarRegistroPorId(req, res, next) {
    try {
      const recursoEncontrado = await this.entidadeService.resgatarRegistroPorId(req.id);
      res.status(200).json(recursoEncontrado);
    } catch (err) {
      next(err);
    }
  }

  async listarRegistroEspecifico(req, res, next) {
    const where = {
      estudante_id: req.estudante_id,
      id: req.id
    };

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
      res.status(201).json(novoRegistro);
    } catch (err) {
      next(err);
    }
  }

  async atualizarRegistro(req, res, next) {
    const dados = req.body;
    const where = { id: req.id};

    try {
      await this.entidadeService.atualizarRegistro(dados, where);
      res.status(200).send("Registro atualizado com sucesso!");
    } catch (err) {
      next(err);
    }
  }

  async removerRegistro(req, res, next) {
    const { id, estudante_id } = req;
    const where = {};

    id ? where.id = req.id : null;
    estudante_id ? where.estudante_id = req.estudante_id : null;

    try {
      await this.entidadeService.removerRegistro(where);
      res.status(200).send("Registro removido com sucesso!");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;