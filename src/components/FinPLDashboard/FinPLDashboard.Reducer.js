import * as Types from "./FinPLDashboard.ActionTypes";
import initialState from "../utils/initialState";

export default function finPlDashboardReducer(
  state = initialState.finPlDashboard,
  action
) {
  switch (action.type) {
    case Types.FINPL_GET_PROCESS_STATUSES_SUCCESS:
      return {
        ...state,
        statuses: [...action.statuses.data],
        lastRefresh: new Date()
      };
    case Types.FINPL_LOAD_AND_REFRESH_TIMER: {
      const { refreshStatusFunc, refreshInterval } = action.payload;
      return {
        ...state,
        refreshTimer: state.refreshTimer
          ? state.refreshTimer
          : setInterval(() => {
              refreshStatusFunc();
            }, refreshInterval)
      };
    }
    case Types.FINPL_GET_PROCESS_JOB_DETAILS_SUCCESS:
      return {
        ...state,
        interfaces: [...action.interfaces.data]
      };
  }
  return state;
}
