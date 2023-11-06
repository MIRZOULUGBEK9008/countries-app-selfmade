import cssClassModifiers from "./css-class-modifiers.js";
import { elLoader } from "./html-elements.js";

const loader = (value) => {
  const { loaderWrapperNone } = cssClassModifiers;
  if (value) {
    elLoader.classList.remove(loaderWrapperNone);
  } else {
    elLoader.classList.add(loaderWrapperNone);
  }
};

export default loader;
