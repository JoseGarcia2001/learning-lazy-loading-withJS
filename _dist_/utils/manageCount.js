const manageCount = () => {
  let loadedImages = 0;
  let renderImages = 0;

  return {
    imageLoaded: function () {
      loadedImages += 1;
      console.log(
        `
        ⚪ Se han agregado ${loadedImages} imágenes
        🟣 Se han cargado ${renderImages} imágenes
        ----------------------------
        `
      );
    },
    imageRendered: function () {
      renderImages += 1;
      console.log(
        `
        ⚪ Se han agregado ${loadedImages} imágenes
        🟣 Se han cargado ${renderImages} imágenes
        ----------------------------
        `
      );
    },
  };
};

export const count = manageCount();
