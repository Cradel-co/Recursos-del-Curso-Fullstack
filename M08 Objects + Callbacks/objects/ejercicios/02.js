function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
   const nuevoObjeto = objeto ;

   nuevoObjeto[propiedad] = valor;
 
   return nuevoObjeto;
 }

module.exports = actualizarValorPropiedad;
