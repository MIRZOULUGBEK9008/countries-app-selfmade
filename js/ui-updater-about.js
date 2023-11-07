import loader from "./loader.js";
import uiCleanerAbout from "./ui-cleaner-about.js";

const uiUpdaterAbout = () => {
  uiCleanerAbout();
  loader(false);
};

export default uiUpdaterAbout;
