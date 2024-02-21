function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  var iter = true;
  while(iter){
     if(num % 3 === 0 && num % 5 === 0){
      iter = false;

      return "fizzbuzz"
    }else if(num % 3 === 0 ){
      iter = false;

      return "fizz"
    }else if(num % 5 === 0 ){
      iter = false;

      return "buzz"
    }else {
      iter= false;
      return false
    }
    
  }
}

module.exports = fizzBuzz;
