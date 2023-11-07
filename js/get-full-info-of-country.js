import request from "./request.js";
import uiUpdaterAbout from "./ui-updater-about.js";

const getFullInfoOfCountry = (target) => {
  const href = target.getAttribute("href");
  request(href).then((res) => {
    uiUpdaterAbout(res[0]);
  });
};

export default getFullInfoOfCountry;
