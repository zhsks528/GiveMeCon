import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductionLikes } from "store/actions/production";
import ProduceDetailPresenter from "./ProduceDetailPresenter";

export default function ProduceDetailContainer({ title, handleCloseDetail }) {
  const [seeingLikes, setSeeingLikes] = useState(false);
  const detailData = useSelector(state => state.production.detailData);
  const dispatch = useDispatch();

  const handleOpenLikes = productionId => {
    setSeeingLikes(true);
    dispatch(getProductionLikes(productionId));
  };

  const handleCloseLikes = () => {
    setSeeingLikes(false);
  };

  return (
    <ProduceDetailPresenter
      detailData={detailData}
      title={title}
      handleCloseDetail={handleCloseDetail}
      seeingLikes={seeingLikes}
      handleOpenLikes={handleOpenLikes}
      handleCloseLikes={handleCloseLikes}
    />
  );
}
