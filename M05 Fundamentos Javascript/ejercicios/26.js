function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  var palabraseparada = str.split("");
  palabraseparada.push("!");
  return palabraseparada.join("");
}

module.exports = agregarSimboloExclamacion;
