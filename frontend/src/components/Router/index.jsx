import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Production from "routes/Production";
import Introduce from "routes/Introduce";
import Trend from "routes/Trend";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Trend} />
      <Route path="/production" exact component={Production} />
      {/* <Route path="/production/music" exact component={Production} />
      <Route path="/production/sports" exact component={Production} />
      <Route path="/production/movie" exact component={Production} />
      <Route path="/production/game" exact component={Production} /> */}
      <Route path="/introduce" exact component={Introduce} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
