module.exports = {
  testEnvironment: "jest-environment-jsdom", // Esto es para que los archivos de test puedan renderizar los componentes con la funcion "render" de react testing library
  setupFiles: ["./jest.setup.js"], // Aqui apuntamos al archivo con las configuraciones para los tests
};