import { App, About } from "../components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { siteRoutes } from "./siteRoutes";
import Layout from "../components/Layout/Layout";

const routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path={siteRoutes.ROOT} component={App} />
        <Route path={siteRoutes.ABOUT} component={About} />
      </Switch>
    </Layout>
  </Router>
);

routes.displayName = "routes";

export default routes;
