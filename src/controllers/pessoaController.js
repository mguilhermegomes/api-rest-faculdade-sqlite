const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");
const pessoaServices = new PessoaServices();
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async listarTodasPessoas(req, res, next) {
    const options = {
      where: {
        ...req.busca
      },
      ...req.paginacao
    };

    try {
      const listaTodasPessoas = await pessoaServices.resgatarTodasPessoas(
        options
      );
      res.status(200).json(listaTodasPessoas);
    } catch (err) {
      next(err);
    }
  }

  async listarMatriculasPorEstudante(req, res, next) {
    try {
      const listaMatriculas = await pessoaServices.resgatarMatriculasEstudante(
        req.estudante_id,
        req.paginacao,
      );
      res.status(200).json(listaMatriculas);
    } catch (err) {
      next(err);
    }
  }

  async listarMatriculasAtivasPorEstudante(req, res, next) {
    try {
      const listaMatriculas =
        await pessoaServices.resgatarMatriculasAtivasEstudante(
          req.estudante_id,
          req.paginacao,
        );
      res.status(200).json(listaMatriculas);
    } catch (err) {
      next(err);
    }
  }

  async listarMatriculasCanceladasPorEstudante(req, res, next) {
    try {
      const listaMatriculasCanceladas =
        await pessoaServices.resgatarMatriculasCanceladasEstudante(
          req.estudante_id,
          req.paginacao,
        );
      res.status(200).json(listaMatriculasCanceladas);
    } catch (err) {
      next(err);
    }
  }

  async cancelarEstudante(req, res, next) {
    try {
      await pessoaServices.cancelarEstudanteEMatriculas(req.estudante_id);
      res
        .status(200)
        .send(`Matriculas do estudante ${req.id} canceladas.`);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PessoaController;
