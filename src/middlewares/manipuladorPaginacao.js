module.exports = (modelo) => {
  return (req, res, next) => {
    const { pagina = 1, limite = 3, ordem = "id:asc" } = req.query;

    const paginaNumero = Math.max(1, Math.ceil(Number(pagina) || 1));
    const limiteNumero = Math.max(1, Math.ceil(Number(limite) || 1));
    const offset = (paginaNumero - 1) * limite;
    
    const ordemValores = String(ordem).trim().split(":");
    const ordemColuna = ordemValores[0].toLowerCase();
    const ordemDirecao = ordemValores[1].toUpperCase();

    const colunasValidas = Object.keys(modelo.rawAttributes);
    const direcoesValidas = ["ASC", "DESC"];
    const chavePrimaria = modelo.primaryKeyAttribute || "id";

    const ordemColunaFinal = colunasValidas.includes(ordemColuna) ? ordemColuna : chavePrimaria;
    const ordemDirecaoFinal = direcoesValidas.includes(ordemDirecao) ? ordemDirecao : "ASC";

    req.paginacao = {
      limit: limiteNumero,
      offset: offset,
      order: [[ordemColunaFinal, ordemDirecaoFinal]]
    };

    next();
  };
};