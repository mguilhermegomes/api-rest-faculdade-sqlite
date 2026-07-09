const Sequelize = require("sequelize");

const Controller = require("./Controller.js");
const MatriculaServices = require("../services/MatriculaService.js");

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async listarMatriculasQuantidade(req, res, next) {
    const { estudante_id } = req.params;
    const options = {
      where: {
        estudante_id: estudante_id,
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
}

module.exports = MatriculaController;
