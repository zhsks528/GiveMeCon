import React from "react";
import styled from "styled-components";
import Login from "components/Login";
import Registration from "components/Registration";

// **** Images
import Intro from "components/asset/images/Intro.jpg";

const Wrapper = styled.div`
  background-image: url(${Intro});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

const AuthPresenter = ({ action, changeAction }) => {
  let changeForm = null;

  if (action === "login") {
    changeForm = <Login changeAction={changeAction} />;
  } else {
    changeForm = <Registration changeAction={changeAction} />;
  }

  return (
    <Wrapper>
      <Cover>{changeForm}</Cover>
    </Wrapper>
  );
};

export default AuthPresenter;
