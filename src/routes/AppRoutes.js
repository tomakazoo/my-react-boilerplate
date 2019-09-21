import {
  // App,
  FinPLDashboard,
  FinPLJobLoadTracker,
  FinPLJobErrorDetails,
  FinPLRollbackGDW,
  FinPLDashboardHistory
} from "../components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { siteRoutes } from "./siteRoutes";
import FinPLLayout from "../components/FinPLLayout/FinPLLayout";
import { authorize } from "../components/utils/authorization";
import { roles } from "../components/utils/roleHelper";

const appRoutes = () => {
  return (
    <Router>
      <FinPLLayout>
        <Switch>
          <Route
            exact
            path={siteRoutes.ROOT}
            component={authorize({
              ChildComponent: FinPLDashboard,
              roles: [roles.ADMIN, roles.OPERATOR, roles.READONLY],
              redirectPath: siteRoutes.ROOT
            })}
          />
          <Route path={siteRoutes.FINPLDASHBOARD} component={FinPLDashboard} />
          <Route
            path={siteRoutes.FINPLDASHBOARDHISTORY}
            component={FinPLDashboardHistory}
          />
          <Route
            path={siteRoutes.FINPLJOBLOADTRACKING}
            component={FinPLJobLoadTracker}
          />
          <Route
            path={siteRoutes.FINPLJOBERRORDETAILS}
            component={FinPLJobErrorDetails}
          />
          <Route
            path={siteRoutes.FINPLROLLBACKGDW}
            component={FinPLRollbackGDW}
          />
        </Switch>
      </FinPLLayout>
    </Router>
  );
};

appRoutes.displayName = "AppRoutes";

export default appRoutes;
