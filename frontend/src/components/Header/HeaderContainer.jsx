import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderPresenter from "./HeaderPresenter";
import { logout, getProfile } from "store/actions/users";

export default function HeaderContainer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [seeingProfile, setSeeingProfile] = useState(false);

  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const myProfile = useSelector(state => state.users.myProfile);

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
  }, [dispatch]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenProfile = () => {
    setSeeingProfile(true);
    setAnchorEl(null);
  };

  const handleCloseProfile = () => {
    setSeeingProfile(false);
  };

  const open = Boolean(anchorEl);

  return (
    <HeaderPresenter
      handleLogout={handleLogout}
      isLoggedIn={isLoggedIn}
      myProfile={myProfile}
      open={open}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
      seeingProfile={seeingProfile}
      handleOpenProfile={handleOpenProfile}
      handleCloseProfile={handleCloseProfile}
    />
  );
}
