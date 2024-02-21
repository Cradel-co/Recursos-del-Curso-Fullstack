function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var menor;
  var mayor;
  var producto = 1; // Inicializamos el producto en 1

  if (a < b) { // Determinamos el menor y mayor de los números
    menor = a;
    mayor = b;
  } else {
    menor = b;
    mayor = a;
  }

  if (menor < 0 && mayor > 0) { // Si uno es negativo y el otro positivo, el producto será 0
    return 0;
  }

  for (var i = menor; i <= mayor; i++) { // Iteramos desde el menor hasta el mayor
    producto *= i; // Multiplicamos cada número al producto
  }

  return producto;
}


module.exports = productoEntreNúmeros;