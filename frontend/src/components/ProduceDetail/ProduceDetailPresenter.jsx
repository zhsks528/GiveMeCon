import React from "react";
import styled from "styled-components";
import NotImage from "components/NotImage";
import ProduceComments from "components/ProduceComments";
import CommentBox from "components/Comments";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  // display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  width: 80%;
  margin: 0 auto;
`;

const Thumbnail = styled.div`
  grid-column: 1 / 3;
  grid-row: 1/3;
  border: 2px solid;
`;

const Info = styled.div`
  border: 2px solid;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Content = styled.div`
  grid-column: 1 / 4;
  border: 2px solid;
`;

const Tags = styled.div`
  grid-column: 1 / 4;
  border: 2px solid;
`;

const Comments = styled.div`
  grid-column: 1 / 4;
  border: 2px solid;
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
  margin-bottom: 20px;
`;

const WatchBtn = styled(Link)`
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background: #f7323f;
  color: white;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Time = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #a9a9a9;
`;

const NoProfile = styled(FontAwesomeIcon)`
  && {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    color: #6b6b6b;
  }
`;
const ProduceDetailPresenter = ({ detailData }) => {
  console.log(detailData);

  let categoryValue,
    username,
    profile = null;

  if (detailData.category) {
    categoryValue = detailData.category["category_name"];
  }

  if (detailData.creator) {
    profile = detailData.creator["profile_image"];
    username = detailData.creator["username"];
  }

  return (
    <Wrapper>
      <TotalTitle>
        <TitleIcon icon={faFlag} />
        <div>{detailData.title}</div>
      </TotalTitle>
      <TotalSubTitleContainer>
        <ProfileContainer>
          {profile ? (
            <Profile src={profile} alt="프로필" />
          ) : (
            <NoProfile icon={faUserCircle} />
          )}

          <div>{username}</div>
        </ProfileContainer>
        <WatchBtn to="/production">나가기</WatchBtn>
      </TotalSubTitleContainer>
      <Time>{detailData.natural_time}</Time>
      <Thumbnail>
        {detailData.thumbnail ? (
          <img src={detailData.thumbnail} alt="썸네일" />
        ) : (
          <NotImage />
        )}
      </Thumbnail>

      <Info>
        <div>Like : {detailData.likes_count} </div>
        <div>유형 : {categoryValue}</div>
      </Info>

      <Content>
        <div>내용</div>
        <div>{detailData.content}</div>
      </Content>
      <Tags>Tags</Tags>
      <CommentBox productionId={detailData.id} />
      <Comments>
        <ProduceComments comments={detailData.comments} />
      </Comments>
    </Wrapper>
  );
};

export default ProduceDetailPresenter;
