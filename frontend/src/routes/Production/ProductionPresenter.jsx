import React from "react";
import { Route } from "react-router-dom";
import Header from "components/Header";
import ProduceTotalList from "components/ProduceTotalList";
import Write from "components/Write";

const ProductionPresenter = ({ match }) => {
  return (
    <>
      <Header />
      <Route exact path={match.url} component={ProduceTotalList} />
      <Route path={`${match.url}/write`} component={Write} />
    </>
  );
};

export default ProductionPresenter;
