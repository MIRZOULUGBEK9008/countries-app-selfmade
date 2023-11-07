import cssClassModifiers from "./css-class-modifiers.js";
import { elThemeSwitcherButton } from "./html-elements.js";
import loader from "./loader.js";
import request from "./request.js";
import themeSwitcher from "./theme-switcher.js";
import uiUpdater from "./ui-updater.js";

// Loader
window.onload = () => {
  const { loadTimeout, dark } = cssClassModifiers;
  const theme = localStorage.getItem("theme");
  if (theme === "dark") document.body.classList.add(dark);
};

// Theme switcher
elThemeSwitcherButton.onclick = () => themeSwitcher();

// Request and send data to uiUpdater
request().then((res) => uiUpdater(res));
