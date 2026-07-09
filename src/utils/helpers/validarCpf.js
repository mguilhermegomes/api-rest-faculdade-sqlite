function validarCpf(cpf) {
  const cpfRegex = /^\d{11}$/;
  return cpfRegex.test(cpf) ? true : false;
}

module.exports = validarCpf;