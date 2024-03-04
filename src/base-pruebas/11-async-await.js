export const getImagen = async () => {
  try {
    const apiKey = 'BsHg9wzHD3Al0i85X6llHO2zoqHfy78U';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
    return "No se encontro la imagen";
  }
};

getImagen();
