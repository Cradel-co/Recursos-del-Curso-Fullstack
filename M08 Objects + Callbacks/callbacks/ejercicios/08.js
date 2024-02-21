const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    // Llamamos a la función de devolución de llamada para evaluar si el elemento actual se encuentra en el array
    if (callback(array[i])) {
      // Si la función de devolución de llamada devuelve true, significa que el elemento fue encontrado, por lo que lo retornamos
      return array[i];
    }
  }
  // Si llegamos hasta aquí, significa que el elemento no se encontró en el array
  return "No se encontró el elemento";
}

module.exports = buscarElemento;
