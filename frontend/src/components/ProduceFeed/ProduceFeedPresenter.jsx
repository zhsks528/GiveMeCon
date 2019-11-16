import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProduceActions from "components/ProduceActions";
import NotImage from "components/NotImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const ThumbnailBox = styled.div`
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

const Info = styled.div`
  margin-top: 10px;
`;

const Title = styled(Link)`
  && {
    text-decoration: none;
    color: black;
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

const ProduceFeedPresenter = ({ productions }) => {
  return (
    <>
      {productions
        ? productions.map(item => (
            <div key={item.id}>
              {item.thumbnail ? (
                <ThumbnailBox>
                  <Thumbnail src={item.thumbnail} alt="썸네일" />
                </ThumbnailBox>
              ) : (
                <NotImage id={item.id} />
              )}
              <Info>
                <Title to={`/production/board/?id=${item.id}`}>
                  {item.title}
                </Title>

                <ProduceActions
                  like={item.likes_count}
                  isLiked={item.is_liked}
                  productionId={item.id}
                  comments={item.comments_count}
                />
                <ProfileContainer>
                  {item.creator.profile_image ? (
                    <Profile src={item.creator.profile_image} alt="프로필" />
                  ) : (
                    <NoProfile icon={faUserCircle} />
                  )}
                  <div>{item.creator.username}</div>
                </ProfileContainer>
              </Info>
            </div>
          ))
        : null}
    </>
  );
};

export default ProduceFeedPresenter;
