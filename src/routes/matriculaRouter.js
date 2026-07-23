const { Router } = require("express");
const { Matricula } = require("../database/models");
const paginar = require("../middlewares/manipuladorPaginacao.js");
const buscar = require("../middlewares/manipuladorBusca");
const queryCampos = require("../constants/queryCampos");
const MatriculaController = require("../controllers/MatriculasController.js");

const matriculaRouter = Router();
const matriculaController = new MatriculaController();

matriculaRouter.get(
  "/",
  buscar(queryCampos.matriculas.permitidos),
  paginar(Matricula),
  matriculaController.listarTodosRegistros.bind(matriculaController),
);
matriculaRouter.get(
  "/cursos-lotados",
  paginar(Matricula),
  matriculaController.listarCursosLotadosPorMatriculas.bind(
    matriculaController,
  ),
);

module.exports = matriculaRouter;
