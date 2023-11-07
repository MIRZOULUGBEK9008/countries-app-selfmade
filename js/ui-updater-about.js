import bordersManager from "./borders-manager.js";
import {
  elBorderTemplate,
  elBorders,
  elFullInfoCapital,
  elFullInfoCountryName,
  elFullInfoCurrencies,
  elFullInfoFlag,
  elFullInfoLanguages,
  elFullInfoNativeName,
  elFullInfoPopulation,
  elFullInfoRegion,
  elFullInfoSubRegion,
  elFullInfoTopLevelDomain,
} from "./html-elements.js";
import loader from "./loader.js";
import uiCleanerAbout from "./ui-cleaner-about.js";

const uiUpdaterAbout = ([fullInfo]) => {
  uiCleanerAbout();
  const fragment = document.createDocumentFragment();
  const {
    flags: { png, alt },
    languages,
    name: { common, nativeName },
    population,
    region,
    subregion,
    capital,
    borders,
    tld,
    currencies,
  } = fullInfo;

  // Set
  elFullInfoFlag.src = png;
  elFullInfoFlag.alt = alt;

  elFullInfoCountryName.innerText = common;

  elFullInfoNativeName.innerText = nativeName
    ? Object.values(nativeName).map(({ common }) => common)
    : "No native name";
  elFullInfoPopulation.innerText = population.toLocaleString();
  elFullInfoRegion.innerText = region;
  elFullInfoSubRegion.innerText = subregion;
  elFullInfoCapital.innerText = capital ? capital : "No capital";
  elFullInfoTopLevelDomain.innerText = tld;
  elFullInfoCurrencies.innerText = currencies
    ? Object.values(currencies).map(({ name }) => name)
    : "No currencies";
  elFullInfoLanguages.innerText = languages
    ? Object.values(languages).map((lang) => lang)
    : "No languages";

  if (borders) {
    borders.forEach((border) => {
      const elBorder = elBorderTemplate.content.cloneNode(true);
      const elBorderLink = elBorder.querySelector(".js-border-link");

      // Set
      elBorderLink.innerText = border;
      elBorderLink.href = `alpha/${border}`;

      elBorderLink.onclick = (e) => {
        e.preventDefault();
        bordersManager(e);
      };

      fragment.appendChild(elBorder);
    });
    elBorders.append(fragment);
  } else elBorders.innerText = "No borders";
  loader(false);
};

export default uiUpdaterAbout;
