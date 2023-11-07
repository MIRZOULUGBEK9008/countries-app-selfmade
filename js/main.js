import cssClassModifiers from "./css-class-modifiers.js";
import getFullInfoOfCountry from "./get-full-info-of-country.js";
import {
  elThemeSwitcherButton,
  elSearchCountriesInput,
  elSelectedRegion,
  elSelectRegion,
  elBackButton,
  elActions,
  elCountries,
  elFullInfo,
} from "./html-elements.js";
import request from "./request.js";
import searchCountries from "./search-countries.js";
import themeSwitcher from "./theme-switcher.js";
import uiCleanerAbout from "./ui-cleaner-about.js";
import uiUpdater from "./ui-updater.js";

// Loader
window.onload = () => {
  const { dark } = cssClassModifiers;
  const theme = localStorage.getItem("theme");
  if (theme === "dark") document.body.classList.add(dark);
};

// Theme switcher
elThemeSwitcherButton.onclick = () => themeSwitcher();

// Request and send data to uiUpdater
request()
  .then((res) => uiUpdater(res))
  .catch(({ message }) => {
    alert(message);
    location.reload();
  });

// Search countries
elSearchCountriesInput.oninput = ({ target: { value } }) => {
  searchCountries(value);
};

// Filter countries
elSelectRegion.forEach((region) => {
  region.onclick = (e) => {
    e.preventDefault();
    elSelectedRegion.innerText = region.innerText;
    elSelectedRegion.click();
    const href = region.getAttribute("href");
    request(href)
      .then((res) => uiUpdater(res))
      .catch(({ message }) => {
        alert(message);
        location.reload();
      });
  };
});

// Get full info
document.onclick = (e) => {
  if (e.target.classList.contains("js-country-name-link")) {
    e.preventDefault();
    getFullInfoOfCountry(e.target);
  }
};

// Back
elBackButton.onclick = () => {
  const {
    sectionActionsBlockButtonBlock,
    sectionActionsActionsNone,
    sectionCountriesCountriesNone,
    sectionCountryFullInfoBlock,
  } = cssClassModifiers;
  elBackButton.classList.remove(sectionActionsBlockButtonBlock);
  elActions.classList.remove(sectionActionsActionsNone);
  elCountries.classList.remove(sectionCountriesCountriesNone);
  elFullInfo.classList.remove(sectionCountryFullInfoBlock);
};
