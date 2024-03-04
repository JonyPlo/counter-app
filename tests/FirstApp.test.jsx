import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  // test("Debe de hacer match con snapshot", () => {
  //   const title = "Hola soy Goku";
  //   //El metodo render obtiene la renderizacion de los componentes que ponemos dentro y luego podemos desestructurarlo para extraer propiedades y trabajar con ellas
  //   const { container } = render(<FirstApp title={title} />);
  //   //Cuando ejecutamos el metodo toMatchSnapshot() automaticamente se crea una carpeta llamada __snapshots__ en nuestro directorio al mismo nivel de donde tenemos nuestro archivo que estamos testeando, esta carpeta contendra un archivo con el codigo del componente ya renderizado
  //   expect(container).toMatchSnapshot();
  // });

  test("Debe de mostrar el titulo en un h1", () => {
    const title = 'Hola soy Goku';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    //El metodo getByText() busca si en todo mi componente renderizado existe ese texto que pusimos dentro de los parentesis. Tener en cuenta que al texto se lo busca dentro del componente, no dentro del snapshot
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    //Con la funcion getByTestId buscamos en el componente una etiqueta con la propiedad "data-testid", y a esa propiedad le agregamos el identificador unico para luego buscarlo con esta funcion
    expect(getByTestId('test-title').innerHTML).toContain(title); // La funcion toContain se fija en que el contenido este dentro de la etiqueta, sin comparar si hay espacios por delante o detras de la cadena
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola soy Goku";
    const subTitle = "Soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2);
  });
});

// NOTA: Se recomienda no hacer la prueba del snapshot si se esta desarrollando la app, ya que los componentes pueden cambiar, asi que solo hacerla cuando estemos por desplegar el proyecto a producción
