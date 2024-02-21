function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código

  /**
   * rand = 0.01 - 0.9
   * rango = rand * 7
   *         0.07  -  6.9
   * +1      1.07  -  7.9
   * Floor   1 -  7
   * 
   * 
   *    -5 - +10
   *    
   * 
   */

  if(array.length > 0){
    var aleatorio =  Math.floor(Math.random() * array.length) + 1;
  return aleatorio;
  }
}

module.exports = obtenerElementoAleatorio;
