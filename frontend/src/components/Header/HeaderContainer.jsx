import React from "react";
import { useDispatch } from "react-redux";
import HeaderPresenter from "./HeaderPresenter";
import { logout } from "store/actions/users";

export default function HeaderContainer() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());

    window.location.href = "/";
  };
  return <HeaderPresenter handleLogout={handleLogout} />;
}
