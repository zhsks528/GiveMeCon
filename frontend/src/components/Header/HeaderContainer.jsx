import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderPresenter from "./HeaderPresenter";
import { logout, getProfile } from "store/actions/users";

export default function HeaderContainer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const profile = useSelector(state => state.users.profile);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

    window.location.href = "/";
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username !== null) {
      dispatch(getProfile(username));
    }
  }, []);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderPresenter
      handleLogout={handleLogout}
      isLoggedIn={isLoggedIn}
      profile={profile}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
}
