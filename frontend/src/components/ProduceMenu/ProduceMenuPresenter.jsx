import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: white;
  border-top: 1px solid #707070;
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 20px;
  margin: 0;
}
`;

const ListItem = styled.li`
  padding: 0 20px;
  color: #6b6b6b;
  cursor: pointer;

  &:hover {
    color: #f7323f;
  }
`;

const LinkItem = styled(Link)`
  color: ${props => props.current ? "#f7323f": "#6b6b6b;"};
  text-decoration : none;
  &:hover {
    color: #f7323f;
  }
`

const ProduceMenuPresenter = () => {
  const listItem = ["전체", "음악", "스포츠", "영화", "게임"];
  const urlList = ["", "music", "sports", "movie", "game"];

  const {pathname} = window.location;
  console.log(pathname)
  const musicIndex = pathname.indexOf("music");
  const sportsIndex = pathname.indexOf("sports");
  const movieIndex = pathname.indexOf("movie");
  const gameIndex = pathname.indexOf("game");

  return (
    <MenuWrapper>
      <HeaderList>
          <ListItem>
            <LinkItem to="/production" current={pathname === '/production'}>전체</LinkItem>
          </ListItem> 
          <ListItem>
            <LinkItem to="/production/music" current={musicIndex > 0}>음악</LinkItem>
          </ListItem> 
          <ListItem>
            <LinkItem to="/production/sports" current={sportsIndex > 0}>스포츠</LinkItem>
          </ListItem> 
          <ListItem>
            <LinkItem to="/production/movie" current={movieIndex > 0}>영화</LinkItem>
          </ListItem> 
          <ListItem>
            <LinkItem to="/production/game" current={gameIndex > 0}>게임</LinkItem>
          </ListItem> 
      </HeaderList>
    </MenuWrapper>
  );
};

export default ProduceMenuPresenter;
