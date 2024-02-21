function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  var encontrarElemento = false;
  for(var i = 0; i <= array.length -1 ; i++ ){
    if (array[i] == elemento){
      encontrarElemento = true;
    }
  }
  if(encontrarElemento){
    return 0;
  }else{
    return -1
  }
}

module.exports = encontrarElemento;
