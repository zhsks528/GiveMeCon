import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    margin-right: 5px;
  }
`;

const Like = styled(Icon)`
  color: red;
`;
const ProduceActionsPresenter = ({
  like,
  isLiked,
  handleChangeLike,
  comments,
  handleOpenLikes,
  productionId
}) => {
  return (
    <div>
      <ActionsWrapper>
        <ActionsContainer onClick={handleChangeLike}>
          {isLiked ? <Like icon={faHeart} /> : <Icon icon={faHeart} />}
          <div>{like}</div>
        </ActionsContainer>
        <ActionsContainer>
          <Icon icon={faCommentAlt} />
          <div>{comments}</div>
        </ActionsContainer>
      </ActionsWrapper>
      <div onClick={() => handleOpenLikes(productionId)}>LIKES</div>
    </div>
  );
};

export default ProduceActionsPresenter;
