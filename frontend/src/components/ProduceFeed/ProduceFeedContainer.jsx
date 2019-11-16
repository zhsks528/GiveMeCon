import React from "react";
import { useSelector } from "react-redux";
import ProduceFeedPresenter from "./ProduceFeedPresenter";

export default function ProduceFeedContainer() {
  const productions = useSelector(state => state.production.productions);

  return <ProduceFeedPresenter productions={productions} />;
}
