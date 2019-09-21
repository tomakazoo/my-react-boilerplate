import * as Types from "./App.ActionTypes";

export function manageMenuVisibility(isMenuHidden) {
  return {
    type: Types.MANAGE_MENU_VISIBILITY,
    payload: isMenuHidden
  };
}
export function getFinPLChartStatuses() {
  return { type: Types.FINPL_GET_PROCESS_CHART_STATUSES };
}

export function getFinPLChartStatusesSuccess(statuses) {
  return { type: Types.FINPL_GET_PROCESS_CHART_STATUSES_SUCCESS, statuses };
}

export function getFinPLJobDetails() {
  return { type: Types.FINPL_GET_PROCESS_JOB_DETAILS };
}

export function getFinPLJobDetailsSuccess(interfaces) {
  return { type: Types.FINPL_GET_PROCESS_JOB_DETAILS_SUCCESS, interfaces };
}
