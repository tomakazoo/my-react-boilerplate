import * as Types from "./FinPLDashboard.ActionTypes";
import { getDataDispatchFunction } from "../utils/httpClient";
import {
  getFinPLDashboardStatusesSuccess,
  getFinPLJobDetailsSuccess
} from "./FinPLDashboard.ActionCreators";

const {
  API_HOST,
  FINPLDASHBOARD_CURRENT_STATUSES,
  FINPLDASHBOARD_JOB_DETAILS
} = __ENVIRONMENT_CONFIG__; // eslint-disable-line

const finplDashboardMiddleware = () => next => action => {
  if (!action) {
    return;
  }
  switch (action.type) {
    case Types.FINPL_GET_PROCESS_STATUSES: {
      const uri = `${API_HOST}${FINPLDASHBOARD_CURRENT_STATUSES}`;
      getDataDispatchFunction(uri, getFinPLDashboardStatusesSuccess)(next);
      break;
    }
    case Types.FINPL_GET_PROCESS_JOB_DETAILS: {
      const uri = `${API_HOST}${FINPLDASHBOARD_JOB_DETAILS}`;
      getDataDispatchFunction(uri, getFinPLJobDetailsSuccess)(next);
      break;
    }
  }
  next(action);
};

export default finplDashboardMiddleware;
