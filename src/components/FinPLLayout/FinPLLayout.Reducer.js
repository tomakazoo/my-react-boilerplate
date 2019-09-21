import * as Types from "./FinPLLayout.ActionTypes";
import initialState from "../utils/initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function finPlLayoutReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === Types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    state > 0 &&
    (action.type === Types.API_CALL_ERROR ||
      actionTypeEndsInSuccess(action.type))
  ) {
    return state - 1;
  }

  return state;
}
