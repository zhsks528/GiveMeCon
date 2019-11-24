import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginPresenter from "./LoginPresenter";
import { login } from "store/actions/users";

export default function LoginContainer({ changeAction }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(login(username, password));
  };

  return (
    <LoginPresenter
      changeAction={changeAction}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}
