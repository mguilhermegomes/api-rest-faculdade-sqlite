const { Router } = require("express");
const { Curso } = require("../database/models");
const paginar = require("../middlewares/manipuladorPaginacao.js");
const validarId = require("../middlewares/manipuladorID.js");
const buscar = require("../middlewares/manipuladorBusca");
const queryCampos = require("../constants/queryCampos");
const CursoController = require("../controllers/CursoController.js");

const cursoRouter = Router();
const cursoController = new CursoController();

cursoRouter.get(
  "/",
  buscar(queryCampos.cursos.permitidos, queryCampos.cursos.parciais),
  paginar(Curso),
  cursoController.listarCursos.bind(cursoController),
);
cursoRouter.get(
  "/:id",
  ...validarId({ id: cursoController.entidadeService }),
  cursoController.listarRegistroPorId.bind(cursoController),
);
cursoRouter.post("/", cursoController.novoRegistro.bind(cursoController));
cursoRouter.put(
  "/:id",
  ...validarId({ id: cursoController.entidadeService }),
  cursoController.atualizarRegistro.bind(cursoController),
);
cursoRouter.delete(
  "/:id",
  ...validarId({ id: cursoController.entidadeService }),
  cursoController.removerRegistro.bind(cursoController),
);

module.exports = cursoRouter;
