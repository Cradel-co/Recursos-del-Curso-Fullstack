function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  // Si el número es menor o igual a 1, no es primo
  if (numero <= 1) {
    return false;
  }
  // Iteramos desde 2 hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si el número es divisible por otro número distinto de 1 y él mismo, no es primo
    if (numero % i === 0) {
      return false;
    }
  }
  // Si no se encontró ningún divisor, el número es primo
  return true;
}

module.exports = esNumeroPrimo;
