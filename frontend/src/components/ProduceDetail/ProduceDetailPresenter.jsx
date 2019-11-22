import React from "react";
import styled from "styled-components";
import NotImage from "components/NotImage";
import ProduceComments from "components/ProduceComments";
import CommentBox from "components/Comments";
import UserList from "components/UserList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentAlt,
  faUserCircle,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 70%;
  height: 80%;
  background: white;
  border-radius: 14px;
`;

const Header = styled.div`
  display: flex;
  padding: 14px 0;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid lightgrey;
  position: relative;
`;

const Title = styled.div`
  order: 1;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  font-size: 16px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  overflow-y: auto;
  position: relative;
  height: 80%;
  padding: 20px;

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6b6b6b;
    border-radius: 4px;
  }
`;

const CloseContainer = styled.div`
  position: absolute;
  right: 20px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #f7323f;
  }
`;

const Body = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5%;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 450px;
  align-items: center;
  justify-content: center;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  margin: 0 auto;
`;

const Thumbnail = styled.img`
  width: 80%;
  height: 80%;
`;

const ContentsTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.5rem;
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

const ContentsRows = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Item = styled.span`
  min-width: 100px;
  margin-right: 20px;
  color: #6b6b6b;
`;

const ActionsItem = styled.div`
  display: flex;
  min-width: 100px;
  margin-right: 20px;
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
  max-height: 220px;
  overflow-y: auto;
  word-break: break-all;

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 14px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6b6b6b;
    border-radius: 4px;
  }
`;

const CommentsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const LikeBtn = styled.div`
  width: 62px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  background-color: #3897f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: #0057ff;
  }
`;

const ProduceDetailPresenter = ({
  detailData,
  title,
  handleCloseDetail,
  seeingLikes,
  handleOpenLikes,
  handleCloseLikes
}) => {
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
    <Container>
      <ContentBox>
        <Header>
          <Title>{title}</Title>
          <CloseContainer onClick={handleCloseDetail}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseContainer>
        </Header>

        <BodyContainer>
          <Body>
            <ThumbnailContainer>
              {detailData.thumbnail ? (
                <Thumbnail src={detailData.thumbnail} alt="썸네일" />
              ) : (
                <NotImage />
              )}
            </ThumbnailContainer>

            <div>
              <ContentsTitle>{detailData.title}</ContentsTitle>
              <ContentsRows>
                <Item>작성자</Item>
                {profile ? (
                  <Profile src={profile} alt="프로필" />
                ) : (
                  <NoProfile icon={faUserCircle} />
                )}

                <span>{username}</span>
              </ContentsRows>

              <ContentsRows>
                <Item>유형</Item>
                <span>{categoryValue}</span>
              </ContentsRows>

              <ContentsRows>
                <Item>작성시간</Item>
                <span>{detailData.natural_time}</span>
              </ContentsRows>

              <ContentsRows>
                <ActionsItem>
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
                </ActionsItem>

                <LikeBtn onClick={() => handleOpenLikes(detailData.id)}>
                  Like
                </LikeBtn>
              </ContentsRows>

              <Content>{detailData.content}</Content>
            </div>
          </Body>
          <CommentsContainer>
            <CommentBox productionId={detailData.id} />
            <ProduceComments comments={detailData.comments} />
          </CommentsContainer>
        </BodyContainer>
      </ContentBox>
      {seeingLikes && (
        <UserList title="Likes" handleCloseLikes={handleCloseLikes} />
      )}
    </Container>
  );
};

export default ProduceDetailPresenter;
