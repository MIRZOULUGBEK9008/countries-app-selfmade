import cssClassModifiers from "./css-class-modifiers.js";
import {
  elActions,
  elBackButton,
  elBorders,
  elCountries,
  elFullInfo,
} from "./html-elements.js";

const uiCleanerAbout = (value) => {
  const {
    sectionCountryFullInfoBlock,
    sectionActionsBlockButtonBlock,
    sectionActionsActionsNone,
    sectionCountriesCountriesNone,
  } = cssClassModifiers;
  elFullInfo.classList.add(sectionCountryFullInfoBlock);
  elBackButton.classList.add(sectionActionsBlockButtonBlock);
  elActions.classList.add(sectionActionsActionsNone);
  elCountries.classList.add(sectionCountriesCountriesNone);
  elBorders.innerHTML = null;
};

export default uiCleanerAbout;
