import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  const title = "Hola soy Goku";
  const subTitle = "Soy un subtitulo";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    //  screen.debug() //Con .debug podemos ver que nos devuelve el objeto screen, y lo que devuelve es el cuerpo de mi componente renderizado dentro de una etiqueta <body>, recordar que el screen solo funciona cuando previamente se hizo el render del componente
  });

  test("Debe de mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    ); // Lo que hace el metodo getByRole() es obtener elementos/etiquetas HTML del componente que estemos renderizando en el screen. En este caso ponemos "heading", { level: 1 } para buscar una etiqueta h1
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});

// NOTA: Se recomienda no hacer la prueba del snapshot si se esta desarrollando la app, ya que los componentes pueden cambiar, asi que solo hacerla cuando estemos por desplegar el proyecto a producción
