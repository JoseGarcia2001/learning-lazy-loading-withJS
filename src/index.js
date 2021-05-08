import { registerImage } from "./lazy";

const randomNum = () => Math.floor(Math.random() * (122 - 1)) + 1;

const addImageBtn = document.getElementById("get-image");
const removeImageBtn = document.getElementById("delete-image");
const deleteAllBtn = document.getElementById("delete-all");
const imagesContainer = document.getElementById("images");

const addNewImage = () => {
  const image = document.createElement("img");
  image.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  image.dataset.src = `https://randomfox.ca/images/${randomNum()}.jpg`;
  image.className = "mx-auto rounded-md bg-gray-300";
  image.width = "320";

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("p-4");
  imageContainer.append(image);

  registerImage(imageContainer);
  imagesContainer.append(imageContainer);
};

const removeLastImage = () => {
  imagesContainer.lastChild
    ? imagesContainer.lastChild.remove()
    : alert("No hay más imagenes por eliminar");
};

addImageBtn.addEventListener("click", addNewImage);
removeImageBtn.addEventListener("click", removeLastImage);
deleteAllBtn.addEventListener("click", () => (imagesContainer.innerHTML = ""));
