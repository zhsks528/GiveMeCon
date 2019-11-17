import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Loading from "components/Loading";
import ProduceFeed from "components/ProduceFeed";

const TotalWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TotalTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 36px;
  color: #6b6b6b;
`;

const TitleIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const TotalSubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const CountBox = styled.div`
  display: inline-block;
  border: 1px solid #6b6b6b;
  width: 60px;
  border-radius: 10px;
  margin-left: 10px;
`;

const Count = styled.div`
  color: #6b6b6b;
  text-align: center;
`;

const WatchBtn = styled(Link)`
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background: #f7323f;
  color: white;
`;

const TotalList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  // grid-template-rows: 400px;
  grid-auto-columns: 200px;
  // grid-auto-rows: 400px;
  grid-gap: 30px;
  justify-content: space-between;
`;

const SubTitleContainer = styled.div`
  display: flex;
`;

const SubTitle = styled.div``;

const Power = styled.span`
  color: #f7323f;
`;

const ProduceTotalListPresenter = ({ loading, productions }) => {
  const count = productions.length;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TotalWrapper>
          <TotalTitle>
            <TitleIcon icon={faCertificate} />
            <div>전체</div>
          </TotalTitle>
          <TotalSubTitleContainer>
            <SubTitleContainer>
              <SubTitle>
                등록된 <Power>컨텐츠</Power>
              </SubTitle>
              <CountBox>
                <Count>{count}</Count>
              </CountBox>
            </SubTitleContainer>
            <WatchBtn to="production/write">글쓰기</WatchBtn>
          </TotalSubTitleContainer>
          <TotalList>
            <ProduceFeed />
          </TotalList>
        </TotalWrapper>
      )}
    </>
  );
};

export default ProduceTotalListPresenter;
