import React from "react";
import { useSelector } from "react-redux";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

import Auth from "components/Auth";

import Trend from "routes/Trend";
import Production from "routes/Production";
import Introduce from "routes/Introduce";

const history = createHistory();

export default function Routes() {
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);

  let route = null;

  if (isLoggedIn) {
    route = <PublicRoutes />;
  } else {
    route = <PrivateRoutes />;
  }
  return <Router history={history}>{route}</Router>;
}

export const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Auth} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/trend" component={Trend} />
      <Route path="/production" component={Production} />
      <Route exact path="/introduce" component={Introduce} />
      <Redirect from="*" to="/trend" />
    </Switch>
  );
};
