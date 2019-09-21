import { combineReducers } from "redux";
import messageReducer from "./components/Message/Message.Reducer";
import finPlDashboard from "./components/FinPLDashboard/FinPLDashboard.Reducer";
import app from "./components/App/App.Reducer";
import apiCallsInProgress from "./components/FinPLLayout/FinPLLayout.Reducer";

export default combineReducers({
  app,
  apiCallsInProgress,
  messageReducer,
  finPlDashboard
});
