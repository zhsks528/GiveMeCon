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

const ProduceMenuPresenter = () => {
  const listItem = ["전체", "음악", "스포츠", "영화", "게임"];
  const urlList = ["", "music", "sport", "movie", "game"];

  return (
    <MenuWrapper>
      <HeaderList>
        {listItem.map((item, index) => (
          <ListItem key={index}>
            <Link to={`/production/${urlList[index]}`}>{item}</Link>
          </ListItem>
        ))}
      </HeaderList>
    </MenuWrapper>
  );
};

export default ProduceMenuPresenter;
