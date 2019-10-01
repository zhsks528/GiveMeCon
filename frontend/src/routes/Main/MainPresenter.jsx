import React from "react";
import styled from "styled-components";
import Header from 'components/Header';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainPresenter = () => {


  return (
    <Wrapper>
      <Header/>
    </Wrapper>
  );
};

export default MainPresenter;
