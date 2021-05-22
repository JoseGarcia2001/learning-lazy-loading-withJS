import { count } from "./utils/manageCount";

const loadImage = (entries) => {
  entries
    .filter((entrie) => entrie.isIntersecting)
    .forEach((entrie) => {
      console.log(entrie);
      const image = entrie.target.firstChild;
      image.src = image.dataset.src;
      observer.unobserve(entrie.target);
      count.imageRendered();
    });
};

const observer = new IntersectionObserver(loadImage);

export const registerImage = (img) => {
  observer.observe(img);
  count.imageLoaded();
};
