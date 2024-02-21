function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  var enRango = false;
  for (var i = 21; i < 50; i++) {
    var nu= Math.round(num);
    if (i == nu) {
      enRango = true;
      break;
    }
  }
  return enRango;
}

module.exports = estaEnRango;
