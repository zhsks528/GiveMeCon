import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginPresenter from "./LoginPresenter";
import { FacebookLogin, Login } from "store/actions/users";

export default function LoginContainer({ changeAction }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(Login(username, password));
  };

  // const handelFacebookLogin = response => {
  //   dispatch(FacebookLogin(response.accessToken));
  // };

  return (
    <LoginPresenter
      changeAction={changeAction}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      // handelFacebookLogin={handelFacebookLogin}
    />
  );
}
