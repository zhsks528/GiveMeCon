import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "components/Loading";
import ProduceFeed from "components/ProduceFeed";
import TitleBox from "components/TitleBox";

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

const TotalList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  // grid-template-rows: 400px;
  grid-auto-columns: 200px;
  // grid-auto-rows: 400px;
  grid-gap: 30px;
  justify-content: space-between;
`;

const ProduceTotalListPresenter = ({ loading, productions }) => {
  const count = productions.length;

  return (
    <TotalWrapper>
      <TitleBox title="PRODUCTION" count={count} />

      <ButtonContainer>
        <WriteBtn to="production/write">글쓰기</WriteBtn>
      </ButtonContainer>
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
