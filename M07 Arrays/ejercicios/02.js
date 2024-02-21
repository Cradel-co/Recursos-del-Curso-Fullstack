function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  var len = array.length - 1;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

      }
    }
  }
  return array
}

module.exports = ordenarArray;
