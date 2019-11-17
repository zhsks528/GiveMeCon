import React from "react";
import styled from "styled-components";
import Login from "components/Login";
import Registration from "components/Registration";

const AuthPresenter = ({ action, changeAction }) => {
  let changeForm = null;

  if (action === "login") {
    changeForm = <Login changeAction={changeAction} />;
  } else {
    changeForm = <Registration changeAction={changeAction} />;
  }

  return <div>{changeForm}</div>;
};

export default AuthPresenter;
