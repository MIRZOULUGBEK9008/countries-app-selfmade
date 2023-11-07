const elLoader = document.querySelector(".js-loader"),
  elThemeSwitcherButton = document.getElementById("themeSwitcherButton"),
  elActions = document.getElementById("actions"),
  elBackButton = document.getElementById("backButton"),
  elSearchCountriesInput = document.getElementById("searchCountriesInput"),
  elSelectedRegion = document.getElementById("selectedRegion"),
  elSelectRegion = document.querySelectorAll(".js-select-region"),
  elCountries = document.getElementById("countries"),
  elCountryTemplate = document.getElementById("countryTemplate");

export {
  elLoader,
  elThemeSwitcherButton,
  elActions,
  elBackButton,
  elSelectedRegion,
  elSelectRegion,
  elCountries,
  elCountryTemplate,
  elSearchCountriesInput,
};
