const buscarElemento = require("../ejercicios/08");


describe('buscarElemento function', () => {
  // Test case 1: Element found
  test('should return the element when it is found', () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (element) => element === 3;
    expect(buscarElemento(array, callback)).toBe(3);
  });

  // Test case 2: Element not found
  test('should return "No se encontró el elemento" when the element is not found', () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (element) => element === 6;
    expect(buscarElemento(array, callback)).toBe("No se encontró el elemento");
  });

  // Test case 3: Empty array
  test('should return "No se encontró el elemento" when the array is empty', () => {
    const array = [];
    const callback = (element) => element === 1;
    expect(buscarElemento(array, callback)).toBe("No se encontró el elemento");
  });

  // Test case 4: Array of objects
  test('should return the object when it is found in the array of objects', () => {
    const array = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Bob", age: 40 },
    ];
    const callback = (element) => element.age === 30;
    expect(buscarElemento(array, callback)).toEqual({ name: "Jane", age: 30 });
  });
});