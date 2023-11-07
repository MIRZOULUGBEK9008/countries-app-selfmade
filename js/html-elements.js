const elLoader = document.querySelector(".js-loader"),
  elThemeSwitcherButton = document.getElementById("themeSwitcherButton"),
  elSearchCountriesInput = document.getElementById("searchCountriesInput"),
  elSelectedRegion = document.getElementById("selectedRegion"),
  elSelectRegion = document.querySelectorAll(".js-select-region"),
  elCountries = document.getElementById("countries"),
  elCountryTemplate = document.getElementById("countryTemplate");

export {
  elLoader,
  elThemeSwitcherButton,
  elSelectedRegion,
  elSelectRegion,
  elCountries,
  elCountryTemplate,
  elSearchCountriesInput,
};
