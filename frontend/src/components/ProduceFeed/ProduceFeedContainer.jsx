import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProduceFeedPresenter from "./ProduceFeedPresenter";
import { getDetailProduction } from "store/actions/production";

export default function ProduceFeedContainer() {
  const [seeingDetail, setSeeingDetail] = useState(false);
  const productions = useSelector(state => state.production.productions);
  const dispatch = useDispatch();

  const handleOpenDetail = productionId => {
    setSeeingDetail(true);
    dispatch(getDetailProduction(productionId));
  };

  const handleCloseDetail = () => {
    setSeeingDetail(false);
  };

  return (
    <ProduceFeedPresenter
      productions={productions}
      seeingDetail={seeingDetail}
      handleOpenDetail={handleOpenDetail}
      handleCloseDetail={handleCloseDetail}
    />
  );
}
