import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Introduce from "routes/Introduce";
import Main from 'routes/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/introduce" exact component={Introduce} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
