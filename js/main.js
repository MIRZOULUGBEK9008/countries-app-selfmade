import cssClassModifiers from "./css-class-modifiers.js";
import loader from "./loader.js";

// Loader
window.onload = () => {
  const { loadTimeout } = cssClassModifiers;
  setTimeout(() => {
    loader(false);
  }, loadTimeout);
};
