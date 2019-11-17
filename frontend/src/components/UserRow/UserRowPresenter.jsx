import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  width: 44px;
  height: 44px;
`;

const User = styled.div`
  margin-left: 10px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const NoProfile = styled(FontAwesomeIcon)`
  && {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    color: #6b6b6b;
  }
`;

const Button = styled.button`
  width: 62px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;

  background-color: #3897f0;
  cursor: pointer;
  font-weight: bold;
`;
const UserRowPresenter = ({ userList, handleClick }) => {
  return (
    <>
      {userList.map(user => (
        <Container>
          <Column>
            {user.profile_image ? (
              <Profile src={user.profile_image} alt="프로필" />
            ) : (
              <NoProfile icon={faUserCircle} />
            )}

            <User>
              <Username>{user.username}</Username>
            </User>
          </Column>
          <Column>
            {user.following ? (
              <Button onClick={() => handleClick(user.id, user.following)}>
                팔로잉
              </Button>
            ) : (
              <Button onClick={() => handleClick(user.id, user.following)}>
                팔로우
              </Button>
            )}
          </Column>
        </Container>
      ))}
    </>
  );
};
export default UserRowPresenter;
