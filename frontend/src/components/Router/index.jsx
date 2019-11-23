import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import Auth from "components/Auth";
import Trend from "routes/Trend";
import Production from "routes/Production";
import Introduce from "routes/Introduce";

const history = createHistory();

export default function Routes() {
  let route = null;
  route = (
    <Switch>
      <Route exact path="/" component={Trend} />
      <Route path="/auth" component={Auth} />
      <Route path="/production" component={Production} />
      <Route exact path="/introduce" component={Introduce} />
      <Redirect from="*" to="/" />
    </Switch>
  );

  return <Router history={history}>{route}</Router>;
}
