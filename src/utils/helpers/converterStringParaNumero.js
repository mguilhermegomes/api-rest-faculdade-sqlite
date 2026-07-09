function converterStringParaNumero(objeto) {
  const regexId = /Id|id/;

  for (let propriedade in objeto) {
    if (regexId.test(propriedade)) {
      objeto[propriedade] = Number(objeto[propriedade]);
    }
  }

  return objeto;
}

module.exports = converterStringParaNumero;