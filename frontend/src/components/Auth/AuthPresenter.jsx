import React from "react";
import styled from "styled-components";
import Login from "components/Login";
import Registration from "components/Registration";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  border: 2px solid;
  padding: 20px;
`;

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
