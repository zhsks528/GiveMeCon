import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Main from 'routes/Main';
import Production from "routes/Production";
import Introduce from "routes/Introduce";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Production" exact component={Production} />
      <Route path="/introduce" exact component={Introduce} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

