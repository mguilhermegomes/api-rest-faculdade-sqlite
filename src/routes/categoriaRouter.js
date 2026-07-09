const { Router } = require("express");
const { Categoria } = require("../database/models");
const paginar = require("../middlewares/manipuladorPaginacao.js");
const CategoriaController = require("../controllers/CategoriaController.js");

const categoriaRouter = Router();
const categoriaController = new CategoriaController();

categoriaRouter.get(
  "/",
  paginar(Categoria),
  categoriaController.listarTodosRegistros.bind(categoriaController),
);
categoriaRouter.get(
  "/:id",
  categoriaController.listarRegistroPorId.bind(categoriaController),
);
categoriaRouter.post(
  "/",
  categoriaController.novoRegistro.bind(categoriaController),
);
categoriaRouter.put(
  "/:id",
  categoriaController.atualizarRegistro.bind(categoriaController),
);
categoriaRouter.delete(
  "/:id",
  categoriaController.removerRegistro.bind(categoriaController),
);

module.exports = categoriaRouter;
