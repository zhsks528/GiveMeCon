import React, { useState } from "react";
import UserListPresenter from "./UserListPresenter";

export default function UserListContainer({ title, handleCloseLikes }) {
  const [loading] = useState(false);

  return (
    <UserListPresenter
      loading={loading}
      title={title}
      handleCloseLikes={handleCloseLikes}
    />
  );
}
