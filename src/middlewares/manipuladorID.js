const ErroRequisicaoInvalida = require("../errors/ErroRequisicaoInvalida");
const ErroNaoEncontrado = require("../errors/ErroNaoEncontrado");

const validarId = (service, idNome) => {
  return async (req, res, next) => {
    const { [idNome]: id } = req.params;

    try {
      if (isNaN(Number(id))) return next(new ErroRequisicaoInvalida());
      const recursoEncontrado = await service.resgatarRegistroPorId(id);
      if (!recursoEncontrado) return next(new ErroNaoEncontrado("ID não encontrado"));
    } catch (err) {
      next(err);
    }

    req[idNome] = Number(id);
    console.log(req[idNome]);
    next();
  };
};

module.exports = (objetoConfig) => {
  return Object.entries(objetoConfig).map(([idNome, service]) => {
    return validarId(service, idNome);
  });
};

// const objetoConfig = {
//   "id": Controller.service,
//   "estudante_id": ControlloOlolo.service
// }

// [["id", Controller.service], ["estudante_id", ControlloOlolo.service]]
// [middleware_id, ["estudante_id", ControlloOlolo.service]]
// [middleware_id, middleware_estudante_id]
// const myArrayModified = [middleware_id, middleware_estudante_id]
// ...myArrayModified -> middleware_id, middleware_estudante_id