import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    margin-right: 5px;
    cursor: pointer;
  }
`;

const Like = styled(Icon)`
  color: red;
`;

const LikesList = styled.div`
  color: #6b6b6b;
  cursor: pointer;
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
      <Wrapper>
        <ActionsContainer onClick={handleChangeLike}>
          {isLiked ? <Like icon={faHeart} /> : <Icon icon={faHeart} />}
          <div>{like}</div>
        </ActionsContainer>
        <ActionsContainer>
          <Icon icon={faCommentAlt} />
          <div>{comments}</div>
        </ActionsContainer>
      </Wrapper>
      <LikesList onClick={() => handleOpenLikes(productionId)}>LIKES</LikesList>
    </div>
  );
};

export default ProduceActionsPresenter;
