import * as Types from "./App.ActionTypes";
import initialState from "../utils/initialState";

export default function appReducer(state = initialState.app, action) {
  switch (action.type) {
    case Types.MANAGE_MENU_VISIBILITY:
      return {
        ...state,
        isMenuHidden: action.payload
      };
  }
  return state;
}
