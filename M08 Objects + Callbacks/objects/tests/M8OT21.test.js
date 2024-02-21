  const agregarMetodoCalculoDescuento = require("../ejercicios/21");

  const storeItem = {
    precio: 80,
    porcentajeDeDescuento: 0.1,
  };
  const storeItem2 = {
    precio: 5,
    porcentajeDeDescuento: 0.5,
  };

  test("Debe agregar la propiedad 'calcularPrecioDescuento' al objetoProducto", function () {
    expect(
      typeof agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento
    ).toBe('function');
    expect(
      typeof agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento
    ).toBe('function');
  });
  
  test('Debe devolver el precio con descuento del producto', function () {
    expect(
      agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento()
    ).toBe(72);
    expect(
      agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento()
    ).toBe(2.5);
  });