import "@testing-library/jest-dom";
const { getSaludo } = require("../../base/02-template-string");

describe("pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar hola Matthew", () => {
    const nombre = "Matthew";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });
  test('getSaludo debe retornar hola Carlos !', () => {
      const saludo = getSaludo();
      expect(saludo).toBe('Hola carlos!')
  })
  
});
