const { getUser, getUsuarioActivo } = require("../../base/05-funciones");
import "@testing-library/jest-dom";

describe("Pruebas en 05-funciones", () => {
  test("should return an object", () => {
    const userTest = { uid: "ABC123", username: "El_Papi1502" };
    const user = getUser();
    expect(user).toEqual(userTest);
  });
  test("should return an object", () => {
    const userTest = { uid: "ABC567", username: "Matthew" };
    const user = getUsuarioActivo("Matthew");
    expect(user).toEqual(userTest);
  });
});
