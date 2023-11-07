import cssClassModifiers from "./css-class-modifiers.js";
import { elThemeSwitcherButton } from "./html-elements.js";
import loader from "./loader.js";
import themeSwitcher from "./theme-switcher.js";

// Loader
window.onload = () => {
  const { loadTimeout, dark } = cssClassModifiers;
  const theme = localStorage.getItem("theme");
  if (theme === "dark") document.body.classList.add(dark);
  setTimeout(() => {
    loader(false);
  }, loadTimeout);
};

// Theme switcher
elThemeSwitcherButton.onclick = () => themeSwitcher();
