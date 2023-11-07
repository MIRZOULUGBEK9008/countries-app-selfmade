import cssClassModifiers from "./css-class-modifiers.js";

const searchCountries = (value) => {
  const { countriesItemNone } = cssClassModifiers;
  const elCountries = document.querySelectorAll(".js-country-name");
  const searchedElement = value.trim().toLowerCase();
  elCountries.forEach((country) => {
    const elCountryName = country.innerText.toLowerCase();
    const elCard = country.parentElement.parentElement;
    if (elCountryName.includes(searchedElement)) {
      elCard.classList.remove(countriesItemNone);
    } else elCard.classList.add(countriesItemNone);
  });
};

export default searchCountries;
