const { Router } = require("express");
const { Pessoa, Matricula } = require("../database/models");
const paginar = require("../middlewares/manipuladorPaginacao.js");
const PessoaController = require("../controllers/pessoaController.js");
const MatriculaController = require("../controllers/MatriculasController.js");

const pessoaRouter = Router();
const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

pessoaRouter.get(
  "/",
  paginar(Pessoa),
  pessoaController.listarTodosRegistros.bind(pessoaController),
);
pessoaRouter.get(
  "/todos",
  paginar(Pessoa),
  pessoaController.listarTodasPessoas.bind(pessoaController),
);
pessoaRouter.get(
  "/:id",
  pessoaController.listarRegistroPorId.bind(pessoaController),
);
pessoaRouter.post("/", pessoaController.novoRegistro.bind(pessoaController));
pessoaRouter.put(
  "/:id",
  pessoaController.atualizarRegistro.bind(pessoaController),
);
pessoaRouter.put(
  "/:estudante_id/cancelar",
  pessoaController.cancelarEstudante.bind(pessoaController),
);
pessoaRouter.delete(
  "/:id",
  pessoaController.removerRegistro.bind(pessoaController),
);
pessoaRouter.get(
  "/:estudante_id/matriculas",
  paginar(Pessoa),
  pessoaController.listarMatriculasAtivasPorEstudante.bind(pessoaController),
);
pessoaRouter.get(
  "/:estudante_id/matriculas/todas",
  paginar(Pessoa),
  pessoaController.listarMatriculasPorEstudante.bind(pessoaController),
);
pessoaRouter.get(
  "/:estudante_id/matriculas/canceladas",
  paginar(Pessoa),
  pessoaController.listarMatriculasCanceladasPorEstudante.bind(
    pessoaController,
  ),
);
pessoaRouter.get(
  "/:estudante_id/matriculas/total-confirmadas",
  paginar(Matricula),
  matriculaController.listarMatriculasQuantidade.bind(matriculaController),
);
pessoaRouter.get(
  "/:estudante_id/matriculas/:id",
  matriculaController.listarRegistroEspecifico.bind(matriculaController),
);
pessoaRouter.post(
  "/:estudante_id/matriculas",
  matriculaController.novoRegistro.bind(matriculaController),
);
pessoaRouter.put(
  "/:estudante_id/matriculas/:id",
  matriculaController.atualizarRegistro.bind(matriculaController),
);
pessoaRouter.delete(
  "/:estudante_id/matriculas/:id",
  matriculaController.removerRegistro.bind(matriculaController),
    
);

module.exports = pessoaRouter;
