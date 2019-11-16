import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RegistrationPresenter from "./RegistrationPresenter";
import { Registration } from "store/actions/users";

export default function RegistrationContainer({ changeAction }) {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(Registration(username, password, email, fullname));
  };

  return (
    <RegistrationPresenter
      changeAction={changeAction}
      email={email}
      setEmail={setEmail}
      fullname={fullname}
      setFullName={setFullName}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}
