import { combineReducers } from "redux";
import messageReducer from "./components/Message/Message.Reducer";
import finPlDashboard from "./components/FinPLDashboard/FinPLDashboard.Reducer";
import app from "./components/App/App.Reducer";

export default combineReducers({
  app,
  messageReducer,
  finPlDashboard
});
