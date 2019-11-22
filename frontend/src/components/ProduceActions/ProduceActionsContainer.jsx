import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unlikeProduction, likeProduction } from "store/actions/production";
import ProduceActionsPresenter from "./ProduceActionsPresenter";

export default function ProduceActionsContainer({
  like,
  isLiked,
  productionId,
  comments
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const dispatch = useDispatch();

  const handleChangeLike = () => {
    if (isLiked) {
      dispatch(unlikeProduction(productionId));
    } else {
      dispatch(likeProduction(productionId));
    }
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ProduceActionsPresenter
      like={like}
      isLiked={isLiked}
      handleChangeLike={handleChangeLike}
      comments={comments}
      isLoggedIn={isLoggedIn}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
}
