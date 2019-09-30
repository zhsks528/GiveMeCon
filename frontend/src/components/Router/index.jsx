import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import Main from "routes/Main";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
