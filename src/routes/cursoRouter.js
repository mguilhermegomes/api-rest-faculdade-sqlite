const { Router } = require("express");
const { Curso } = require("../database/models");
const paginar = require("../middlewares/manipuladorPaginacao.js");
const CursoController = require("../controllers/CursoController.js");

const cursoRouter = Router();
const cursoController = new CursoController();

cursoRouter.get(
  "/",
  paginar(Curso),
  cursoController.listarCursos.bind(cursoController),
);
cursoRouter.get(
  "/:id",
  cursoController.listarRegistroPorId.bind(cursoController),
);
cursoRouter.post("/", cursoController.novoRegistro.bind(cursoController));
cursoRouter.put(
  "/:id",
  cursoController.atualizarRegistro.bind(cursoController),
);
cursoRouter.delete(
  "/:id",
  cursoController.removerRegistro.bind(cursoController),
);

module.exports = cursoRouter;
