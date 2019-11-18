import React from "react";
import styled from "styled-components";
import TitleBox from "components/TitleBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEye } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 20px;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 14px;
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
  console.log(trends);

  return (
    <Wrapper>
      <TitleBox title="TRENDS" count={count} />
      <Container>
        {trends.map(trend => (
          <div>
            <Thumbnail src={trend.thumbnail} />
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
            <div>{trend.natural_time}</div>
            {/* <Date>{trend.created_at}</Date> */}
          </div>
        ))}
      </Container>
    </Wrapper>
  );
};

export default TrendTotalPresenter;
