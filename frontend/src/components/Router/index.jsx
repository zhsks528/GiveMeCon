import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Trend from "routes/Trend";
import Production from "routes/Production";
import Introduce from "routes/Introduce";

export default function Routes() {
  return (
    <Switch>
      <Route path="/trend" component={Trend} />
      <Route path="/production" component={Production} />
      <Route exact path="/introduce" component={Introduce} />
      <Redirect from="*" to="/trend" />
    </Switch>
  );
}
