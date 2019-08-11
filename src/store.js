import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import finplDashboardMiddleware from "./components/FinPLDashboard/FinPLDashboard.Middleware";

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(finplDashboardMiddleware))
);
