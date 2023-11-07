import { elCountries, elCountryTemplate } from "./html-elements.js";
import loader from "./loader.js";

const uiUpdater = (countries) => {
  const fragment = document.createDocumentFragment();
  elCountries.innerHTML = null;
  countries.forEach(
    ({
      capital,
      flags: { alt, png },
      population,
      region,
      name: { common },
    }) => {
      const elCountryCard = elCountryTemplate.content.cloneNode(true);
      const elFlag = elCountryCard.querySelector(".js-flag");
      const elCountryName = elCountryCard.querySelector(".js-country-name");
      const elPopulation = elCountryCard.querySelector(".js-population");
      const elRegion = elCountryCard.querySelector(".js-region");
      const elCapital = elCountryCard.querySelector(".js-capital");

      // Set
      elFlag.alt = alt;
      elFlag.src = png;

      elCountryName.innerText = common;

      elPopulation.innerText = population.toLocaleString();

      elRegion.innerText = region;

      elCapital.innerText = capital ? capital : "No capital";

      fragment.appendChild(elCountryCard);
    }
  );
  elCountries.append(fragment);
  loader(false);
};

export default uiUpdater;
