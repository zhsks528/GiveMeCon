import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UserRowPresenter from "./UserRowPresenter";
import { followUser, unfollowUser } from "store/actions/users";

export default function UserRowContainer() {
  const dispatch = useDispatch();

  const handleClick = (userId, following) => {
    if (following) {
      dispatch(unfollowUser(userId));
    } else {
      dispatch(followUser(userId));
    }
  };

  const userList = useSelector(state => state.users.userList);
  return <UserRowPresenter userList={userList} handleClick={handleClick} />;
}
