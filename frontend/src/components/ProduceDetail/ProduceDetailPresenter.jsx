import React from "react";
import styled from "styled-components";
import NotImage from "components/NotImage";
import ProduceComments from "components/ProduceComments";
import CommentBox from "components/Comments";
import TitleBox from "components/TitleBox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentAlt,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background: #f7323f;
  color: white;
  text-decoration: none;
`;

const Body = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20%;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 450px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Thumbnail = styled.img`
  width: 70%;
  height: 70%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 36px;
`;

const Profile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

const NoProfile = styled(FontAwesomeIcon)`
  && {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #6b6b6b;
    margin-right: 10px;
  }
`;

const Comments = styled.div`
  overflow-y: auto;
`;

const InfoRows = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Item = styled.span`
  min-width: 100px;
  margin-right: 20px;
  color: #6b6b6b;
`;

const IconContainer = styled.div`
  margin-right: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    margin-right: 5px;
  }
`;

const Like = styled(Icon)`
  color: red;
`;

const Content = styled.div`
  margin-top: 20px;
  height: 220px;
  overflow-y: auto;
  word-break: break-all;
`;

const ProduceDetailPresenter = ({ detailData }) => {
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
      <TitleBox title="DETAIL" />

      <ButtonContainer>
        <Button to="/production">나가기</Button>
      </ButtonContainer>

      <Body>
        <ThumbnailContainer>
          {detailData.thumbnail ? (
            <Thumbnail src={detailData.thumbnail} alt="썸네일" />
          ) : (
            <NotImage />
          )}
        </ThumbnailContainer>

        <div>
          <Title>{detailData.title}</Title>
          <InfoRows>
            <Item>작성자</Item>
            {profile ? (
              <Profile src={profile} alt="프로필" />
            ) : (
              <NoProfile icon={faUserCircle} />
            )}

            <span>{username}</span>
          </InfoRows>

          <InfoRows>
            <Item>유형</Item>
            <span>{categoryValue}</span>
          </InfoRows>

          <InfoRows>
            <Item>작성시간</Item>
            <span>{detailData.natural_time}</span>
          </InfoRows>

          <InfoRows>
            <IconContainer>
              {detailData.is_liked ? (
                <Like icon={faHeart} />
              ) : (
                <Icon icon={faHeart} />
              )}
              <span>{detailData.likes_count}</span>
            </IconContainer>
            <IconContainer>
              <Icon icon={faCommentAlt} />
              <span>{detailData.comments_count}</span>
            </IconContainer>
          </InfoRows>

          <Content>{detailData.content}</Content>
        </div>
      </Body>
      <CommentBox productionId={detailData.id} />
      <Comments>
        <ProduceComments comments={detailData.comments} />
      </Comments>
    </Wrapper>
  );
};

export default ProduceDetailPresenter;
