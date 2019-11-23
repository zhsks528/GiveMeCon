import React from "react";
import styled from "styled-components";
import TitleBox from "components/TitleBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import SelectCategory from "components/SelectCategory";
import NotData from "components/NotData";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: ${props => (props.count > 0 ? "grid" : "block")}
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 20px;
  justify-content: space-between;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 14px;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
  transition: 0.3s;

  &:hover {
    box-shadow: inset 0 0 10px #000000;
    transform: scale(1.3);
  }
`;

const Title = styled.a`
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
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Category = styled.div`
  color: #6b6b6b;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserLink = styled.a`
  display: -webkit-box;
  color: black;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-decoration: none;
  color: black;
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

const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  color: #6b6b6b;
`;

const TrendTotalPresenter = ({ trends }) => {
  const count = trends.length;

  return (
    <Wrapper>
      <TitleBox title="TRENDS" count={count} />

      <SelectCategory />
      <Container count={count}>
        {count > 0 ? (
          trends.map(trend => (
            <div key={trend.id}>
              <ThumbnailContainer>
                <Thumbnail src={trend.thumbnail} />
              </ThumbnailContainer>

              <Title href={trend.url} target="_blank">
                {trend.title}
              </Title>
              <Category>{trend.category.category_name}</Category>
              <ProfileContainer>
                <NoProfile icon={faUserCircle} />
                <UserLink href={trend.channel.url} target="_blank">
                  {trend.channel.name}
                </UserLink>
              </ProfileContainer>

              <ViewContainer>
                <NoProfile icon={faEye} />
                <span>{trend.view}</span>
              </ViewContainer>
            </div>
          ))
        ) : (
          <NotData />
        )}
      </Container>
    </Wrapper>
  );
};

export default TrendTotalPresenter;
