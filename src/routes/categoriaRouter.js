const { Router } = require("express");
const { Categoria } = require("../database/models");
const paginar = require("../middlewares/manipuladorPaginacao.js");
const validarId = require("../middlewares/manipuladorID.js");
const buscar = require("../middlewares/manipuladorBusca.js");
const queryCampos = require("../constants/queryCampos");
const CategoriaController = require("../controllers/CategoriaController.js");

const categoriaRouter = Router();
const categoriaController = new CategoriaController();

categoriaRouter.get(
  "/",
  buscar(queryCampos.categoria.permitidos, queryCampos.categoria.parciais),
  paginar(Categoria),
  categoriaController.listarTodosRegistros.bind(categoriaController),
);
categoriaRouter.get(
  "/:id",
  ...validarId({ id: categoriaController.entidadeService }),
  categoriaController.listarRegistroPorId.bind(categoriaController),
);
categoriaRouter.post(
  "/",
  categoriaController.novoRegistro.bind(categoriaController),
);
categoriaRouter.put(
  "/:id",
  ...validarId({ id: categoriaController.entidadeService }),
  categoriaController.atualizarRegistro.bind(categoriaController),
);
categoriaRouter.delete(
  "/:id",
  ...validarId({ id: categoriaController.entidadeService }),
  categoriaController.removerRegistro.bind(categoriaController),
);

module.exports = categoriaRouter;
