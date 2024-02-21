function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var digitos = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    digitos++;
  }
  return digitos === 3;
}

module.exports = tieneTresDigitos;
