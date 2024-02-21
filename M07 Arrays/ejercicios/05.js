function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Devuelve undefined si no se encuentra ninguno.
  for (var i = 0; i < array.length ; i ++) {
    if (array[i].length > 5) {
      return array[i];
    }
  }
  return undefined;
}

module.exports = obtenerPrimerStringLargo;
