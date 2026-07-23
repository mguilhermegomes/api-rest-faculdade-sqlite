const { Router } = require("express");
const { Pessoa, Matricula } = require("../database/models");
const paginar = require("../middlewares/manipuladorPaginacao.js");
const validarId = require("../middlewares/manipuladorID.js");
const buscar = require("../middlewares/manipuladorBusca.js");
const queryCampos = require("../constants/queryCampos");
const PessoaController = require("../controllers/pessoaController.js");
const MatriculaController = require("../controllers/MatriculasController.js");

const pessoaRouter = Router();
const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

pessoaRouter.get(
  "/",
  buscar(queryCampos.pessoas.permitidos, queryCampos.pessoas.parciais),
  paginar(Pessoa),
  pessoaController.listarTodosRegistros.bind(pessoaController),
);
pessoaRouter.get(
  "/todos",
  buscar(queryCampos.pessoas.permitidos, queryCampos.pessoas.parciais),
  paginar(Pessoa),
  pessoaController.listarTodasPessoas.bind(pessoaController),
);
pessoaRouter.get(
  "/:id",
  ...validarId({ id: pessoaController.entidadeService }),
  pessoaController.listarRegistroPorId.bind(pessoaController),
);
pessoaRouter.post("/", pessoaController.novoRegistro.bind(pessoaController));
pessoaRouter.put(
  "/:id",
  ...validarId({ id: pessoaController.entidadeService }),
  pessoaController.atualizarRegistro.bind(pessoaController),
);
pessoaRouter.put(
  "/:estudante_id/cancelar",
  ...validarId({ estudante_id: pessoaController.entidadeService }),
  pessoaController.cancelarEstudante.bind(pessoaController),
);
pessoaRouter.delete(
  "/:id",
  ...validarId({ id: pessoaController.entidadeService }),
  pessoaController.removerRegistro.bind(pessoaController),
);
pessoaRouter.get(
  "/:estudante_id/matriculas",
  ...validarId({ estudante_id: pessoaController.entidadeService }),
  paginar(Pessoa),
  pessoaController.listarMatriculasAtivasPorEstudante.bind(pessoaController),
);
pessoaRouter.get(
  "/:estudante_id/matriculas/todas",
  ...validarId({ estudante_id: pessoaController.entidadeService }),
  paginar(Pessoa),
  pessoaController.listarMatriculasPorEstudante.bind(pessoaController),
);
pessoaRouter.get(
  "/:estudante_id/matriculas/canceladas",
  ...validarId({ estudante_id: pessoaController.entidadeService }),
  paginar(Pessoa),
  pessoaController.listarMatriculasCanceladasPorEstudante.bind(
    pessoaController,
  ),
);
pessoaRouter.get(
  "/:estudante_id/matriculas/total-confirmadas",
  ...validarId({ estudante_id: pessoaController.entidadeService }),
  paginar(Matricula),
  matriculaController.listarMatriculasQuantidade.bind(matriculaController),
);
pessoaRouter.get(
  "/:estudante_id/matriculas/:id",
  ...validarId({
    estudante_id: pessoaController.entidadeService,
    id: matriculaController.entidadeService,
  }),
  matriculaController.listarRegistroEspecifico.bind(matriculaController),
);
pessoaRouter.post(
  "/:estudante_id/matriculas",
  ...validarId({ estudante_id: pessoaController.entidadeService }),
  matriculaController.novaMatricula.bind(matriculaController),
);
pessoaRouter.put(
  "/:estudante_id/matriculas/:id",
  ...validarId({
    estudante_id: pessoaController.entidadeService,
    id: matriculaController.entidadeService,
  }),
  matriculaController.atualizarMatricula.bind(matriculaController),
);
pessoaRouter.delete(
  "/:estudante_id/matriculas/:id",
  ...validarId({
    estudante_id: pessoaController.entidadeService,
    id: matriculaController.entidadeService,
  }),
  matriculaController.removerRegistro.bind(matriculaController),
);

module.exports = pessoaRouter;
