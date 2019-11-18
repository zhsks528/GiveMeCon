import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const ListContainer = styled.ul`
  padding: 0;
`;

const List = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const UserContainer = styled.div`
  display: flex;
`;

const Profile = styled.img`
  width: 40px !important;
  height: 40px !important;
  border-radius: 50%;
  margin-right: 10px;
`;

const NoProfile = styled(FontAwesomeIcon)`
  && {
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    margin-right: 10px;
    color: #6b6b6b;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #a9a9a9;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: #f7323f;
  }
`;

const Message = styled.span`
  word-break: break-all;
`;
const ProduceCommentsPresenter = ({ comments, handleDelete }) => {
  const username = localStorage.getItem("username");

  return (
    <>
      <ListContainer>
        {comments
          ? comments.map(comment => (
              <List key={comment.id}>
                <UserContainer>
                  {comment.creator.profile_image ? (
                    <Profile src={comment.creator.profile_image} />
                  ) : (
                    <NoProfile icon={faUserCircle} />
                  )}

                  <div>
                    <div>{comment.creator.username}</div>
                    <Message>{comment.message}</Message>
                  </div>
                </UserContainer>
                {username === comment.creator.username ? (
                  <Icon
                    onClick={() => handleDelete(comment.id)}
                    icon={faTimes}
                  />
                ) : null}
              </List>
            ))
          : null}
      </ListContainer>
    </>
  );
};

export default ProduceCommentsPresenter;
