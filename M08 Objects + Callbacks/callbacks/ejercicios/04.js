function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
 var  valor = 0
  for(let i =0 ; i < arrayOfNumbers.length ; i++){
    valor = valor + arrayOfNumbers[i];
  }
  cb(valor);
}

module.exports = sumarArray;
