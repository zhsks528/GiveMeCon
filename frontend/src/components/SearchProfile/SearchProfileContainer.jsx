import React from "react";
import { useSelector } from "react-redux";

import SearchProfilePresenter from "./SearchProfilePresenter";

export default function SearchProfileContainer({ handleCloseProfile }) {
  const userProfile = useSelector(state => state.users.userProfile);

  return (
    <SearchProfilePresenter
      userProfile={userProfile}
      handleCloseProfile={handleCloseProfile}
    />
  );
}
