import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const ProduceActionsPresenter = ({ like, isLiked, handleChangeLike }) => {
  return (
    <div onClick={handleChangeLike}>
      {isLiked ? (
        <FontAwesomeIcon icon={faHeartbeat} />
      ) : (
        <FontAwesomeIcon icon={faHeart} />
      )}

      <div>{like}</div>
    </div>
  );
};

export default ProduceActionsPresenter;
