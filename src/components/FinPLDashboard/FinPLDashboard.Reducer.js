import * as Types from "./FinPLDashboard.ActionTypes";
import initialState from "../utils/initialState";

export default function finPlDashboardReducer(
  state = initialState.finPlDashboard,
  action
) {
  switch (action.type) {
    case Types.FINPL_GET_PRODUCT_PROCESS_STATUSES_SUCCESS:
      return {
        ...state,
        statuses: [...action.statuses]
      };
  }
  return state;
}
