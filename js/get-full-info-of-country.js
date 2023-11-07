import request from "./request.js";
import uiUpdaterAbout from "./ui-updater-about.js";

const getFullInfoOfCountry = (target) => {
  const href = target.getAttribute("href");
  request(href)
    .then((res) => {
      uiUpdaterAbout(res);
    })
    .catch(({ message }) => {
      alert(message);
      location.reload();
    });
};

export default getFullInfoOfCountry;
