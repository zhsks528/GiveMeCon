import React from "react";
import styled from "styled-components";
import Logo from "components/asset/images/logo.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: white;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  height: 60px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Title = styled.h3`
  color: #f7323f;
  font-size: 20px;
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 20px;
  margin: 0;
}
`;

const ListItem = styled.li`
  padding: 0 20px;
  color: #6b6b6b;
  cursor: pointer;

  &:hover {
    color: #f7323f;
  }
`;

const HeaderPresenter = () => {
  const listItem = ["트렌드", "프로듀싱", "소개", "로그인"];
  return (
    <HeaderWrapper>
      <MainContainer>
        <LogoContainer>
          <LogoIcon src={Logo} alt="로고" />
          <Title>기브미콘</Title>
        </LogoContainer>

        <HeaderList>
          {listItem.map(item => (
            <ListItem>{item}</ListItem>
          ))}
        </HeaderList>
      </MainContainer>
    </HeaderWrapper>
  );
};

export default HeaderPresenter;
