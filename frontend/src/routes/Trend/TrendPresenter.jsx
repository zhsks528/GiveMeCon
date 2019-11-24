import React from "react";
import { Route } from "react-router-dom";
import Header from "components/Header";
import TrendTotal from "components/TrendTotal";

const TrendPresenter = ({ match }) => {
  return (
    <>
      <Header />
      <Route exact path={match.url} component={TrendTotal} />
    </>
  );
};

export default TrendPresenter;
