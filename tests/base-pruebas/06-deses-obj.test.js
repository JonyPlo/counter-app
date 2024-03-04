import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas desde 06-deses-obj", () => {
  test("usContext debe de retornar un objeto", () => {
    const user = {
      clave: "Jony",
      edad: 28,
    };

    const context = usContext(user);

    expect(context).toEqual({
      nombreClave: expect.any(String),
      anios: expect.any(Number),
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
