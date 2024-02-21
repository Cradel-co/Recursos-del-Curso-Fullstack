function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var nuevo_array = [];
  for (var i= array.length - 1 ; i >= 0; i--){
    nuevo_array.push(array[i]); 
  }
  return nuevo_array;
}

module.exports = invertirArray;
