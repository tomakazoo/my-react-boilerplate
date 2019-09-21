import * as Types from "./App.ActionTypes";
import { getDataDispatchFunction } from "../utils/httpClient";
import {
  getFinPLChartStatusesSuccess,
  getFinPLJobDetailsSuccess
} from "./App.ActionCreators";

const {
  API_HOST,
  FINPLDASHBOARD_STATUSES,
  FINPLDASHBOARD_JOB_DETAILS
} = __ENVIRONMENT_CONFIG__; // eslint-disable-line

const appMiddleware = () => next => action => {
  if (!action) {
    return;
  }
  switch (action.type) {
    case Types.FINPL_GET_PROCESS_CHART_STATUSES: {
      const uri = `${API_HOST}${FINPLDASHBOARD_STATUSES}`;
      getDataDispatchFunction(uri, getFinPLChartStatusesSuccess)(next);
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

export default appMiddleware;
