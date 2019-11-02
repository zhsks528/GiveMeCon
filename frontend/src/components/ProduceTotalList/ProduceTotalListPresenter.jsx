import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import Test from "components/asset/images/Youtube.png";

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

const WatchBtn = styled.div`
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background: #f7323f;
  color: white;
`;

const TotalList = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px;
  grid-template-rows: 200px;
  grid-auto-columns: 200px;
  grid-auto-rows: 200px;
  grid-gap: 20px;
`;

const SubTitleContainer = styled.div`
  display: flex;
`;

const SubTitle = styled.div``;

const Power = styled.span`
  color: #f7323f;
`;
const ThumbnailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 118px;
`;

const Thumbnail = styled.img`
  width: 200px;
  height: 118px;
`;

const NoImageBox = styled(ThumbnailBox)`
  border-radius: 10px;
  background: black;
`;
const NoImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffcc00;
`;

const NoIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
`;
const ProduceTotalListPresenter = ({ list }) => {
  const count = list.count;
  const data = list.results;

  return (
    <>
      <TotalWrapper>
        <TotalTitle>
          <TitleIcon icon={faGuitar} />
          <div>음악</div>
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
          <WatchBtn>둘러보기</WatchBtn>
        </TotalSubTitleContainer>
        <TotalList>
          {data
            ? data.map(item => (
                <div key={item.id}>
                  {item.thumnail ? (
                    <ThumbnailBox>
                      <Thumbnail src={item.thumnail} alt="사진" />
                    </ThumbnailBox>
                  ) : (
                    <NoImageBox>
                      <NoImage>
                        <NoIcon icon={faExclamationTriangle} />
                        <div>No Image</div>
                      </NoImage>
                    </NoImageBox>
                  )}
                  <div>{item.title}</div>
                  <div>By {item.author}</div>
                </div>
              ))
            : null}
        </TotalList>
      </TotalWrapper>
    </>
  );
};

export default ProduceTotalListPresenter;
