function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var total=0, promedio=0;
  for (var i =0 ; i < resultadosTest.length ; i++){
    total= total + resultadosTest[i];
    promedio = total / resultadosTest.length;

  }
  return promedio;
}

module.exports = promedioResultadosTest;
