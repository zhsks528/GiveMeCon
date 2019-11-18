import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProduceActions from "components/ProduceActions";
import NotImage from "components/NotImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import UserList from "components/UserList";

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
`;

const InfoContainer = styled.div`
  margin-top: 10px;
`;

const Title = styled(Link)`
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
    height: 50px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
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
    margin-right: 10px;
    color: #6b6b6b;
  }
`;

const ProduceFeedPresenter = ({
  productions,
  seeingLikes,
  handleOpenLikes,
  handleCloseLikes
}) => {
  return (
    <>
      {productions
        ? productions.map(item => (
            <div key={item.id}>
              {item.thumbnail ? (
                <ThumbnailContainer>
                  <Thumbnail src={item.thumbnail} alt="썸네일" />
                </ThumbnailContainer>
              ) : (
                <NotImage id={item.id} />
              )}
              <InfoContainer>
                <ProduceActions
                  like={item.likes_count}
                  isLiked={item.is_liked}
                  productionId={item.id}
                  comments={item.comments_count}
                  handleOpenLikes={handleOpenLikes}
                />
                <Title to={`/production/board/?id=${item.id}`}>
                  {item.title}
                </Title>

                <ProfileContainer>
                  {item.creator.profile_image ? (
                    <Profile src={item.creator.profile_image} alt="프로필" />
                  ) : (
                    <NoProfile icon={faUserCircle} />
                  )}
                  <div>{item.creator.username}</div>
                </ProfileContainer>
              </InfoContainer>
            </div>
          ))
        : null}
      {seeingLikes && (
        <UserList title="Likes" handleCloseLikes={handleCloseLikes} />
      )}
    </>
  );
};

export default ProduceFeedPresenter;
