function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  console.log(objeto)
  console.log(propiedad)
  return objeto.hasOwnProperty(propiedad);
}

module.exports = verificarPropiedad;
