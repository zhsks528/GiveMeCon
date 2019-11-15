import React from "react";
import { useDispatch } from "react-redux";
import { unlikeProduction, likeProduction } from "store/actions/production";
import ProduceActionsPresenter from "./ProduceActionsPresenter";

export default function ProduceActionsContainer({
  like,
  isLiked,
  productionId
}) {
  const dispatch = useDispatch();

  const handleChangeLike = () => {
    if (isLiked) {
      dispatch(unlikeProduction(productionId));
    } else {
      dispatch(likeProduction(productionId));
    }
  };
  return (
    <ProduceActionsPresenter
      like={like}
      isLiked={isLiked}
      handleChangeLike={handleChangeLike}
    />
  );
}
