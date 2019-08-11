import * as Types from "./FinPLDashboard.ActionTypes";

export function getFinPLDashboardStatuses() {
  return { type: Types.FINPL_GET_PRODUCT_PROCESS_STATUSES };
}

export function getFinPLDashboardStatusesSuccess(statuses) {
  return { type: Types.FINPL_GET_PRODUCT_PROCESS_STATUSES_SUCCESS, statuses };
}
