const Sequelize = require("sequelize");
const Controller = require("./Controller.js");
const MatriculaServices = require("../services/MatriculaService.js");
const matriculaServices = new MatriculaServices();
class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async listarMatriculasQuantidade(req, res, next) {
    const options = {
      where: {
        estudante_id: req.estudante_id,
      },
    };

    try {
      const listaMatriculasQuantidade =
        await matriculaServices.resgatarRegistrosQuantidade({
          ...options,
          ...req.paginacao,
        });
      res.status(200).json(listaMatriculasQuantidade);
    } catch (err) {
      next(err);
    }
  }

  async listarCursosLotadosPorMatriculas(req, res, next) {
    const limiteMatriculas = 2;
    const options = {
      where: {
        status: "matriculado",
      },
      attributes: ["curso_id"],
      group: ["curso_id"],
      having: Sequelize.literal(`count(curso_id) >= ${limiteMatriculas}`),
    };

    try {
      const listaCursosLotados =
        await matriculaServices.resgatarRegistrosQuantidade({
          ...options,
          ...req.paginacao,
        });
      res.status(200).json(listaCursosLotados);
    } catch (err) {
      next(err);
    }
  }

  async novaMatricula(req, res, next) {
    req.body.estudante_id = req.estudante_id;
    const dados = req.body;

    try {
      const novaMatricula = await matriculaServices.criarRegistro(dados);
      res.status(201).json(novaMatricula);
    } catch(err) {
      next(err);
    }
  }

  async atualizarMatricula(req, res, next) {
    req.body.estudante_id = req.estudante_id;
    const dados = req.body;

    const where = {
      estudante_id: req.estudante_id,
      id: req.id
    };

    try {
      await matriculaServices.atualizarRegistro(dados, where);
      res.status(200).send("Registro atualizado com sucesso!");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MatriculaController;
