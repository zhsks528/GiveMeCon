import React from "react";
import { useSelector } from "react-redux";

import ProfilePresenter from "./ProfilePresenter";

export default function ProfileContainer({ handleCloseProfile }) {
  const myProfile = useSelector(state => state.users.myProfile);

  return (
    <ProfilePresenter
      myProfile={myProfile}
      handleCloseProfile={handleCloseProfile}
    />
  );
}
