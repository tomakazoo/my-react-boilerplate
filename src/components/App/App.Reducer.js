import * as Types from "./App.ActionTypes";
import initialState from "../utils/initialState";

export default function appReducer(state = initialState.app, action) {
  switch (action.type) {
    case Types.MANAGE_MENU_VISIBILITY:
      return {
        ...state,
        isMenuHidden: action.payload
      };
    case Types.FINPL_GET_PROCESS_CHART_STATUSES_SUCCESS:
      return {
        ...state,
        statuses: [...action.statuses.data]
      };
    case Types.FINPL_GET_PROCESS_JOB_DETAILS_SUCCESS:
      return {
        ...state,
        interfaces: [...action.interfaces.data]
      };
  }
  return state;
}
