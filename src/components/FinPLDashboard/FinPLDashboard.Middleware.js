import * as Types from "./FinPLDashboard.ActionTypes";
import { getDataDispatchFunction } from "../utils/httpClient";
import { getFinPLDashboardStatusesSuccess } from "./FinPLDashboard.ActionCreators";

const { FINPLDASHBOARD_STATUSES } = __ENVIRONMENT_CONFIG__; // eslint-disable-line

const finplDashboardMiddleware = () => next => action => {
  if (!action) {
    return;
  }
  switch (action.type) {
    case Types.FINPL_GET_PRODUCT_PROCESS_STATUSES: {
      const uri = `${FINPLDASHBOARD_STATUSES}`;
      getDataDispatchFunction(uri, getFinPLDashboardStatusesSuccess)(next);
      break;
    }
  }
  next(action);
};

export default finplDashboardMiddleware;
