import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProduceFeedPresenter from "./ProduceFeedPresenter";
import { getProductionLikes } from "store/actions/production";

export default function ProduceFeedContainer() {
  const productions = useSelector(state => state.production.productions);

  const [seeingLikes, setSeeingLikes] = useState(false);

  const dispatch = useDispatch();

  const handleOpenLikes = productionId => {
    setSeeingLikes(true);
    dispatch(getProductionLikes(productionId));
  };

  const handleCloseLikes = () => {
    setSeeingLikes(false);
  };

  return (
    <ProduceFeedPresenter
      productions={productions}
      seeingLikes={seeingLikes}
      handleOpenLikes={handleOpenLikes}
      handleCloseLikes={handleCloseLikes}
    />
  );
}
