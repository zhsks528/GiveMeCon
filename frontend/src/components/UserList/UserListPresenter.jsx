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
`;

const UserListPresenter = ({ loading, title, handleCloseLikes }) => {
  return (
    <Container>
      <Box>
        <Header>
          <Title>{title}</Title>
          <span onClick={handleCloseLikes}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </Header>
        <Content>{loading ? <Loading /> : <UserRow />}</Content>
      </Box>
    </Container>
  );
};

export default UserListPresenter;