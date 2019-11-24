import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProduceFeedPresenter from "./ProduceFeedPresenter";
import { getDetailProduction } from "store/actions/production";
import { searchProfile } from "store/actions/users";

export default function ProduceFeedContainer() {
  const [seeingDetail, setSeeingDetail] = useState(false);
  const [seeingProfile, setSeeingProfile] = useState(false);
  const productions = useSelector(state => state.production.productions);
  const dispatch = useDispatch();

  const handleOpenDetail = productionId => {
    setSeeingDetail(true);
    dispatch(getDetailProduction(productionId));
  };

  const handleCloseDetail = () => {
    setSeeingDetail(false);
  };

  const handleOpenProfile = username => {
    setSeeingProfile(true);
    dispatch(searchProfile(username));
  };

  const handleCloseProfile = () => {
    setSeeingProfile(false);
  };

  return (
    <ProduceFeedPresenter
      productions={productions}
      seeingDetail={seeingDetail}
      handleOpenDetail={handleOpenDetail}
      handleCloseDetail={handleCloseDetail}
      seeingProfile={seeingProfile}
      handleOpenProfile={handleOpenProfile}
      handleCloseProfile={handleCloseProfile}
    />
  );
}
