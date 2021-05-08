let loadedImages = 0;
let renderImages = 0;

const logCount = () => {
  console.log(
    `
    ⚪ Se han agregado ${loadedImages} imágenes);
    🟣 Se han cargado ${renderImages} imágenes
    ------------------------------------------------
    `
  );
};

const loadImage = (entries) => {
  entries
    .filter((entrie) => entrie.isIntersecting)
    .forEach((entrie) => {
      const image = entrie.target.firstChild;
      image.src = image.dataset.src;
      image.isLoaded = true;
      observer.unobserve(entrie.target);

      renderImages += 1;
      logCount();
    });
};

const observer = new IntersectionObserver(loadImage);

export const registerImage = (img) => {
  observer.observe(img);

  loadedImages += 1;
  logCount();
};
