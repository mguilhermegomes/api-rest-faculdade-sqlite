const { Op } = require("sequelize");
const Controller = require("./Controller.js");
const CursoServices = require("../services/CursoService.js");
const cursoServices = new CursoServices();
class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async listarCursos(req, res, next) {
    const { data_inicial, data_final } = req.query;
    const options = {
      where: {
        ...req.busca,
      },
      ...req.paginacao
    };

    data_inicial || data_final ? options.where.data_inicio = {} : null;
    data_inicial ? options.where.data_inicio[Op.gte] = data_inicial : null;
    data_final ? options.where.data_inicio[Op.lte] = data_final : null;

    try {
      const listaCursos = await cursoServices.resgatarTodosRegistros(options);
      listaCursos.length >= 1
        ? res.status(200).json(listaCursos)
        : res.status(200).send("Nenhum curso encontrado para o intervalo de data especificado.");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CursoController;