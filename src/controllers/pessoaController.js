const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async listarTodasPessoas(req, res, next) {
    try {
      const listaTodasPessoas = await pessoaServices.resgatarTodasPessoas(
        req.paginacao,
      );
      res.status(200).json(listaTodasPessoas);
    } catch (err) {
      next(err);
    }
  }

  async listarMatriculasPorEstudante(req, res, next) {
    const { estudante_id } = req.params;

    try {
      const listaMatriculas = await pessoaServices.resgatarMatriculasEstudante(
        estudante_id,
        req.paginacao,
      );
      res.status(200).json(listaMatriculas);
    } catch (err) {
      next(err);
    }
  }

  async listarMatriculasAtivasPorEstudante(req, res, next) {
    const { estudante_id } = req.params;

    try {
      const listaMatriculas =
        await pessoaServices.resgatarMatriculasAtivasEstudante(
          estudante_id,
          req.paginacao,
        );
      res.status(200).json(listaMatriculas);
    } catch (err) {
      next(err);
    }
  }

  async listarMatriculasCanceladasPorEstudante(req, res, next) {
    const { estudante_id } = req.params;

    try {
      const listaMatriculasCanceladas =
        await pessoaServices.resgatarMatriculasCanceladasEstudante(
          estudante_id,
          req.paginacao,
        );
      res.status(200).json(listaMatriculasCanceladas);
    } catch (err) {
      next(err);
    }
  }

  async cancelarEstudante(req, res, next) {
    const { estudante_id } = req.params;

    try {
      await pessoaServices.cancelarEstudanteEMatriculas(estudante_id);
      res
        .status(200)
        .send(`Matriculas do estudante ${estudante_id} canceladas.`);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PessoaController;
