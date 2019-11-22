import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Loading from "components/Loading";
import UserRow from "components/UserRow";

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

const Box = styled.div`
  width: 100%;
  max-width: 600px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  min-height: 300px;
  overflow-y: auto;

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

const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #f7323f;
  }
`;

const UserListPresenter = ({ loading, title, handleCloseLikes }) => {
  return (
    <Container>
      <Box>
        <Header>
          <Title>{title}</Title>
          <IconContainer onClick={handleCloseLikes}>
            <FontAwesomeIcon icon={faTimes} />
          </IconContainer>
        </Header>
        <Content>{loading ? <Loading /> : <UserRow />}</Content>
      </Box>
    </Container>
  );
};

export default UserListPresenter;
