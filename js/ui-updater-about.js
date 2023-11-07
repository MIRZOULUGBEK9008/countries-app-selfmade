import loader from "./loader.js";
import uiCleanerAbout from "./ui-cleaner-about.js";

const uiUpdaterAbout = (fullInfo) => {
  uiCleanerAbout();
  loader(false);
  console.log(fullInfo);
};

export default uiUpdaterAbout;
