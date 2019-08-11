import * as Types from "./App.ActionTypes";

export function manageMenuVisibility(isMenuHidden) {
  return {
    type: Types.MANAGE_MENU_VISIBILITY,
    payload: isMenuHidden
  };
}
