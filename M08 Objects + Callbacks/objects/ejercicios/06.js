const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let j =0;
  for ( i in objeto){
    j++
  }
  return j
};

module.exports = contarPropiedades;
