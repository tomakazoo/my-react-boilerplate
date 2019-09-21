import * as Types from "./FinPLDashboard.ActionTypes";

export function getFinPLDashboardStatuses() {
  return { type: Types.FINPL_GET_PROCESS_STATUSES };
}

export function getFinPLDashboardStatusesSuccess(statuses) {
  return { type: Types.FINPL_GET_PROCESS_STATUSES_SUCCESS, statuses };
}

export function setRefreshTimer(refreshStatusFunc, refreshInterval) {
  return {
    type: Types.FINPL_LOAD_AND_REFRESH_TIMER,
    payload: { refreshStatusFunc, refreshInterval }
  };
}
export function getFinPLJobDetails() {
  return { type: Types.FINPL_GET_PROCESS_JOB_DETAILS };
}

export function getFinPLJobDetailsSuccess(interfaces) {
  return { type: Types.FINPL_GET_PROCESS_JOB_DETAILS_SUCCESS, interfaces };
}
