import cssClassModifiers from "./css-class-modifiers.js";
import { elActions, elBackButton, elCountries } from "./html-elements.js";

const uiCleanerAbout = () => {
  const {
    sectionActionsBlockButtonBlock,
    sectionActionsActionsNone,
    sectionCountriesCountriesNone,
  } = cssClassModifiers;
  elBackButton.classList.toggle(sectionActionsBlockButtonBlock);
  elActions.classList.toggle(sectionActionsActionsNone);
  elCountries.classList.toggle(sectionCountriesCountriesNone);
};

export default uiCleanerAbout;
