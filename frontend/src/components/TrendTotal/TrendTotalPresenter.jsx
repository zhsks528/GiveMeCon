import React from "react";
import styled from "styled-components";
import TitleBox from "components/TitleBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import SelectCategory from "components/SelectCategory";
import NotData from "components/NotData";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

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

const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
  transition: all 0.3s linear;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 14px;
  overflow: hidden;
  position: relative;

  &:hover ${Figcaption} {
    opacity: 1;
  }

  &:hover ${Thumbnail} {
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
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Category = styled.div``;

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
  margin-bottom: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

const TrendTotalPresenter = ({
  trends,
  current,
  setCurrent,
  totalCount,
  handlePageChange
}) => {
  const count = trends.length;

  return (
    <Wrapper>
      <TitleBox title="TRENDS" count={count} />
      <SelectCategory setCurrent={setCurrent} />

      <Container count={count}>
        {count > 0 ? (
          trends.map(trend => (
            <div key={trend.id}>
              <ThumbnailContainer>
                <Thumbnail src={trend.thumbnail} />
                <Figcaption>
                  <Category>{trend.category.category_name}</Category>
                  <ViewContainer>
                    <Icon icon={faEye} />
                    <span>{trend.view}</span>
                  </ViewContainer>
                </Figcaption>
              </ThumbnailContainer>

              <Title href={trend.url} target="_blank">
                {trend.title}
              </Title>

              <ProfileContainer>
                <NoProfile icon={faUserCircle} />
                <UserLink href={trend.channel.url} target="_blank">
                  {trend.channel.name}
                </UserLink>
              </ProfileContainer>
            </div>
          ))
        ) : (
          <NotData />
        )}
      </Container>
      <Pagination
        onChange={handlePageChange}
        current={current}
        total={totalCount}
        defaultPageSize={30}
        style={{
          margin: "60px 0px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      />
    </Wrapper>
  );
};

export default TrendTotalPresenter;
