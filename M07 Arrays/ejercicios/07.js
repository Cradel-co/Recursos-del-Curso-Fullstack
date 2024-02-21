function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  for(var i = 0 ; i < array.length; i++){
    let temp = array[i].toUpperCase();
    array[i]= temp;

  }
  return array;
  // Tu código:
}

module.exports = convertirStringAMayusculas;
