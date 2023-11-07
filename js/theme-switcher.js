import cssClassModifiers from "./css-class-modifiers.js";

const themeSwitcher = () => {
  const { dark } = cssClassModifiers;
  document.body.classList.toggle(dark);
  if (document.body.classList.contains(dark)) {
    localStorage.setItem("theme", "dark");
  } else localStorage.setItem("theme", "light");
};

export default themeSwitcher;
