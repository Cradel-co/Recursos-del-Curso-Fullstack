function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var igualdad = false;
  for (let i = 0 ; i< array.length; i++){
    for(let j = 0; j < array.length - i; i++){
      if(array[j] === array[j + 1]){
        igualdad = true;
      }else{
        igualdad= false;
      }
    }
  }
  return igualdad;

  
/**
 *   for (let i = 0 ; i< array.length; i++){
    if(array[1] !== array[i])
      return false;
  }
  return true;
 */
}

module.exports = todosIguales;
