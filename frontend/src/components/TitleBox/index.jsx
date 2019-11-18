import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const Line = styled.div`
  width: 50px;
  height: 2px;
  background: black;
`;

const LineTitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

const CountBox = styled.div`
  display: inline-block;
  width: 60px;
  border-radius: 10px;
  background: #f7323f;
  border: none;
  outline: none;
`;

const Count = styled.div`
  color: yellow;
  text-align: center;
  padding: 0 10px;
`;

const TitleBox = ({ title, count }) => {
  return (
    <Header>
      <Line />
      <LineTitle>{title}</LineTitle>
      {count > 0 ? (
        <CountBox>
          <Count>{count}</Count>
        </CountBox>
      ) : null}
    </Header>
  );
};

export default TitleBox;
