const pessoaRouter = require("./pessoaRouter.js");
const categoriaRouter = require("./categoriaRouter.js");
const cursoRouter = require("./cursoRouter.js");
const matriculaRouter = require("./matriculaRouter.js");

function router(app) {
  app.use("/pessoas", pessoaRouter);
  app.use("/categorias", categoriaRouter);
  app.use("/cursos", cursoRouter);
  app.use("/matriculas", matriculaRouter);
}

module.exports = router;