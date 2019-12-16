import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NotImage from "components/NotImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faHeart,
  faCommentAlt
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
  z-index: 2;
`;

const Box = styled.div`
  width: 100%;
  max-width: 800px;
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-auto-rows: 500px;
  grid-auto-flow: column;
  padding: 20px;
  grid-gap: 20px;
`;

const TitleIcon = styled.div`
  position: absolute;
  right: 20px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #f7323f;
  }
`;

const Profile = styled.div``;

const Production = styled.div`
  overflow: hidden;
`;

const ProductionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 5%;
  height: 450px;
  overflow-y: auto;
  align-items: flex-start;

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

const ProfileImage = styled.img`
  width: 100%
  height: 100%
  border-radius: 4px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 14px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const ActionContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const ProductionTitle = styled.div`
  display: -webkit-box;
  color: black;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-text-decoration: none;
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
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

const Username = styled.div`
  margin: 20px 0;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Count = styled.div`
  min-width: 30px;
  background: #f7323f;
  text-align: center;
  border-radius: 14px;
  color: white;
  padding: 0 10px;
  margin-left: 10px;
`;

const ProfilePresenter = ({ handleCloseProfile, myProfile }) => {
  const { production } = myProfile;
  const postCount = production.length;

  return (
    <Container>
      <Box>
        <Header>
          <Title>프로필</Title>
          <TitleIcon onClick={handleCloseProfile}>
            <FontAwesomeIcon icon={faTimes} />
          </TitleIcon>
        </Header>
        <Content>
          <Profile>
            <ThumbnailContainer>
              {myProfile.profile_image ? (
                <ProfileImage
                  src={
                    "http://ec2-54-180-109-107.ap-northeast-2.compute.amazonaws.com:8000" +
                    myProfile.profile_image
                  }
                  alt="프로필"
                />
              ) : (
                <NotImage />
              )}
            </ThumbnailContainer>

            <Username>{myProfile.username}</Username>
            <div>팔로워 : {myProfile.followers_count}</div>
            <div>팔로잉 : {myProfile.following_count}</div>
          </Profile>

          <Production>
            <SubTitle>
              <span>Post</span>
              <Count>{postCount}</Count>
            </SubTitle>
            <ProductionContainer>
              {production.length > 0 ? (
                production.map(item => (
                  <div key={item.id}>
                    <ThumbnailContainer>
                      {item.thumbnail ? (
                        <Thumbnail
                          src={
                            "http://ec2-54-180-109-107.ap-northeast-2.compute.amazonaws.com:8000" +
                            item.thumbnail
                          }
                        />
                      ) : (
                        <NotImage />
                      )}
                    </ThumbnailContainer>

                    <ActionContainer>
                      <IconContainer>
                        <Icon icon={faHeart} />
                        <div>{item.likes_count}</div>
                      </IconContainer>
                      <IconContainer>
                        <Icon icon={faCommentAlt} />
                        <div>{item.comments_count}</div>
                      </IconContainer>
                    </ActionContainer>
                    <ProductionTitle>{item.title}</ProductionTitle>
                  </div>
                ))
              ) : (
                <ButtonContainer>
                  <WriteBtn to="production/write">글쓰기</WriteBtn>
                </ButtonContainer>
              )}
            </ProductionContainer>
          </Production>
        </Content>
      </Box>
    </Container>
  );
};

export default ProfilePresenter;
