import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe de retornar la URL de la imagen', async () => {
    const url = await getImagen();
    const urlRegExp =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    expect(urlRegExp.test(url)).toBeTruthy();
  });

  // test('getImagen debe de retornar un error si la apikey no existe', async () => {
  //   const resp = await getImagen();

  //   expect(resp).toBe('No se encontro la imagen');
  // });
});
