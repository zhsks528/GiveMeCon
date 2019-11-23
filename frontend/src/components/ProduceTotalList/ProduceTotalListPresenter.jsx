import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "components/Loading";
import ProduceFeed from "components/ProduceFeed";
import TitleBox from "components/TitleBox";
import Popover from "@material-ui/core/Popover";

const TotalWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

const WriteBtn = styled(Link)`
  cursor: pointer;
  border-radius: 10px;
  background: #f7323f;
  color: white;
  text-decoration: none;
  padding: 5px 10px;

  &:hover {
    color: yellow;
  }
`;

const Btn = styled.div`
  cursor: pointer;
  border-radius: 10px;
  background: #f7323f;
  color: white;
  text-decoration: none;
  padding: 5px 10px;

  &:hover {
    color: yellow;
  }
`;
const TotalList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  // grid-template-rows: 400px;
  grid-auto-columns: 200px;
  // grid-auto-rows: 400px;
  grid-gap: 20px;
  justify-content: space-between;
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

const ProduceTotalListPresenter = ({
  loading,
  productions,
  isLoggedIn,
  open,
  anchorEl,
  handleClick,
  handleClose
}) => {
  const count = productions.length;

  return (
    <TotalWrapper>
      <TitleBox title="PRODUCTION" count={count} />

      {isLoggedIn ? (
        <ButtonContainer>
          <WriteBtn to="production/write">글쓰기</WriteBtn>
        </ButtonContainer>
      ) : (
        <>
          <ButtonContainer>
            <Btn onClick={handleClick}>글쓰기</Btn>
          </ButtonContainer>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
            <div>
              <Message>컨텐츠를 제공하고 싶나요?</Message>
              <Message>로그인하여 컨텐츠를 남겨주세요! </Message>
            </div>
            <LoginLink to="/auth">로그인</LoginLink>
          </Popover>
        </>
      )}

      {loading ? (
        <Loading />
      ) : (
        <TotalList>
          <ProduceFeed />
        </TotalList>
      )}
    </TotalWrapper>
  );
};

export default ProduceTotalListPresenter;
