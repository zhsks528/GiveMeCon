import React from "react";
import ProductionPresenter from "./ProductionPresenter";

export default function ProductionContainer({ match, location }) {
  return <ProductionPresenter match={match} location={location} />;
}
