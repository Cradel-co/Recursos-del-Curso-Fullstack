function filter(arrayOfStrings) {
  var newArreglo = [];
  for (let i = 0; i < arrayOfStrings.length ; i++) {
    let stringActual = arrayOfStrings[i];
    let string = arrayOfStrings[i].split("")
    if (stringActual.includes("a") && string[0] === "a") {
      newArreglo.push(arrayOfStrings[i]);
    }
  }
  return newArreglo;
}

module.exports = filter;
