import { App, FinPLDashboard } from "../components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { siteRoutes } from "./siteRoutes";
import Layout from "../components/Layout/Layout";
import { authorize } from "../components/utils/authorization";
import { roles } from "../components/utils/roleHelper";

const appRoutes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path={siteRoutes.ROOT}
            component={authorize({
              ChildComponent: App,
              roles: [roles.ADMIN, roles.OPERATOR, roles.READONLY],
              redirectPath: siteRoutes.FINPLDASHBOARD
            })}
          />
          <Route path={siteRoutes.FINPLDASHBOARD} component={FinPLDashboard} />
        </Switch>
      </Layout>
    </Router>
  );
};

appRoutes.displayName = "AppRoutes";

export default appRoutes;
