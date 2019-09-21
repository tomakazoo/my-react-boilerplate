import React from "react";
import { render } from "react-dom";
import "@babel/polyfill";
import "./styles.css";
import DefaultErrorBoundary from "./DefaultErrorBoundary";
import createStore from "./store";
import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";

const store = createStore;
const routingComponents = (
  <React.StrictMode>
    <DefaultErrorBoundary>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </DefaultErrorBoundary>
  </React.StrictMode>
);

render(routingComponents, document.getElementById("app"));
