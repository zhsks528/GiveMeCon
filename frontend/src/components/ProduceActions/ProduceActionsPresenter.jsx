import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";

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

const ActionsHover = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: red;
  }
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

const Message = styled.div`
  padding: 10px;
  font-size: 14px;
`;

const LoginLink = styled(Link)`
  padding: 0 10px;
  color: #065fd5;
  text-decoration: none;

  &:hover {
    color: #f7323f;
  }
`;

const ProduceActionsPresenter = ({
  like,
  isLiked,
  handleChangeLike,
  comments,
  isLoggedIn,
  anchorEl,
  handleClick,
  handleClose
}) => {
  return (
    <div>
      <Wrapper>
        {isLoggedIn ? (
          <>
            <ActionsContainer onClick={handleChangeLike}>
              <ActionsHover>
                {isLiked ? <Like icon={faHeart} /> : <Icon icon={faHeart} />}
                <div>{like}</div>
              </ActionsHover>
            </ActionsContainer>
            <ActionsContainer>
              <Icon icon={faCommentAlt} />
              <div>{comments}</div>
            </ActionsContainer>
          </>
        ) : (
          <>
            <ActionsContainer onClick={handleClick}>
              <ActionsHover>
                {isLiked ? <Like icon={faHeart} /> : <Icon icon={faHeart} />}
                <div>{like}</div>
              </ActionsHover>
            </ActionsContainer>
            <Popover
              open={anchorEl}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
            >
              <div>
                <Message>프로젝트가 마음에 드시나요?</Message>
                <Message>로그인하여 의견을 남겨주세요! </Message>
              </div>
              <LoginLink to="/auth">로그인</LoginLink>
            </Popover>
            <ActionsContainer>
              <Icon icon={faCommentAlt} />
              <div>{comments}</div>
            </ActionsContainer>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default ProduceActionsPresenter;
