import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 40px 0;
`;

const Line = styled.div`
  width: 50px;
  height: 2px;
  background: black;
`;

const LineTitle = styled.div`
  margin-top: 10px;
  font-size: 28px;
`;

const TitleBox = ({ title }) => {
  return (
    <Header>
      <Line />
      <LineTitle>{title}</LineTitle>
    </Header>
  );
};

export default TitleBox;
