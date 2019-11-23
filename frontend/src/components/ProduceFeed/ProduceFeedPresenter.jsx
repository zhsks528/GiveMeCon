import React from "react";
import styled from "styled-components";
import ProduceActions from "components/ProduceActions";
import NotImage from "components/NotImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ProduceDetail from "components/ProduceDetail";
import SearchProfile from "components/SearchProfile";

const Figcaption = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 0;
  transition: all 0.3s linear;
`;

const Category = styled.div`
  margin-bottom: 10px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.3s;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 14px;
  position: relative;

  &:hover ${Figcaption} {
    opacity: 1;
  }

  &:hover ${Thumbnail} {
    transform: scale(1.3);
  }
`;

const InfoContainer = styled.div`
  margin-top: 10px;
`;

const Title = styled.div`
  && {
    display: -webkit-box;
    color: black;
    max-height: 3.2rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    text-decoration: none;
    cursor: pointer;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #3897f0;
  }
`;

const ProfileImg = styled.img`
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
    margin-right: 10px;
    color: #6b6b6b;
  }
`;

const ProduceFeedPresenter = ({
  productions,
  seeingDetail,
  handleOpenDetail,
  handleCloseDetail,
  seeingProfile,
  handleOpenProfile,
  handleCloseProfile
}) => {
  productions.map(item => console.log(item));
  return (
    <>
      {productions.map(item => (
        <div key={item.id}>
          <ThumbnailContainer>
            {item.thumbnail ? (
              <Thumbnail src={item.thumbnail} alt="썸네일" />
            ) : (
              <NotImage id={item.id} />
            )}
            <Figcaption>
              <Category>{item.category.category_name}</Category>
            </Figcaption>
          </ThumbnailContainer>
          <InfoContainer>
            <ProduceActions
              like={item.likes_count}
              isLiked={item.is_liked}
              productionId={item.id}
              comments={item.comments_count}
            />
            <Title onClick={() => handleOpenDetail(item.id)}>
              {item.title}
            </Title>

            <ProfileContainer
              onClick={() => handleOpenProfile(item.creator.username)}
            >
              {item.creator.profile_image ? (
                <ProfileImg src={item.creator.profile_image} alt="프로필" />
              ) : (
                <NoProfile icon={faUserCircle} />
              )}
              <div>{item.creator.username}</div>
            </ProfileContainer>
          </InfoContainer>
        </div>
      ))}
      {seeingDetail && (
        <ProduceDetail title="Detail" handleCloseDetail={handleCloseDetail} />
      )}
      {seeingProfile && (
        <SearchProfile title="프로필" handleCloseProfile={handleCloseProfile} />
      )}
    </>
  );
};

export default ProduceFeedPresenter;
