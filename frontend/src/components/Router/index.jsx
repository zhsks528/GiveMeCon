import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import Introduce from "routes/Introduce";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Introduce} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
