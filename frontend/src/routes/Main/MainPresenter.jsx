import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faBell,
  faHeart,
  faGift
} from "@fortawesome/free-solid-svg-icons";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const MainHeader = styled.div`
  background: red;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.li`
  position: relative;
  right: 150px;
  display: inline-block;
  padding: 20px 15px;
  text-transform: uppercase;
  color: white;
  font-size: 20px;
`;


const MainTitleContainer = styled.div`
  display: 100%;
  flex-direction: column;
  position: absolute;
  top: 20%;
  left: 20%;
`;

const Title = styled.h2`
  color: gray;
  font-size: 50px;
`;

const Logo = styled.div`
  
  
  position: absolute;
  top: 0%;
  left: 200px;
  padding: 25px 15px;
  color: White;
  font-size: 30px;
  margin: 0 100px;
`;

const LogoImage = styled.div`
  position: absolute;
  top: 0%;
  left: 280px;
  width: 1px;
  height: 1px;
  padding: 15px;
  background-image: url("LogoImage.jpg");
  border: 1px;
  border-radius: 50%;
  margin: 30px 0px;
`;

const GameImage = styled.div`
  position: absolute;
  top: 180px;
  left: 0%;
  background-image: url("Game.jpg");
  border: 1px;
  border-radius: 8px;
  padding: 5px;
  width: 150px;
  height: 250px;
  margin: 30px 0px;
`;

const MusicImage = styled.div`
  position: absolute;
  top: 200px;
  left: 22%;
  background-image: url("Music.jpg");
  border: 1px;
  border-radius: 8px;
  padding: 5px;
  width: 140px;
  height: 240px;
  margin: 30px 0px;
`;

const BeautyImage = styled.div`
  position: absolute;
  top: 180px;
  left: 41%;
  background-image: url("Beauty.jpg");
  border: 1px;
  border-radius: 8px;
  padding: 5px;
  width: 140px;
  height: 250px;
  margin: 30px 0px;
`;

const TalkImage = styled.div`
  position: absolute;
  top: 180px;
  left: 62%;
  background-image: url("Talk.png");
  border: 1px;
  border-radius: 8px;
  padding: 5px;
  width: 140px;
  height: 250px;
  margin: 30px 0px;
`;

const SportsImage = styled.div`
  position: absolute;
  top: 180px;
  left: 82%;
  background-image: url("Sports.jpg");
  border: 1px;
  border-radius: 8px;
  padding: 5px;
  width: 140px;
  height: 250px;
  margin: 30px 0px;
`;

const Btn = styled.button`
position: relative;
  left: 0px;
  width: 100px;
  height: 50px;
  border: 2px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: balck;
  margin: 10px 35px;
`;

const MainAniContainer = styled.div``;

const MainAniBox = styled.ul`
    width : 100%
    height : 100%;
    margin: 0;
    padding: 0;
    position : absolute;
    top : 0;
    left : 0;
    overflow : hidden
`;

const animate = keyframes`
  0%{
      transform : translateY(0) rotate(0deg);
      opacity: 1;
  }
  100%{
    transform : translateY(-800px) rotate(360deg);
    opacity: 0;
}
`;

const AnimateItem = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  width: 25px;
  height: 25px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${animate} 20s linear infinite;
  bottom: -100px;

  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;

  &:nth-child(1) {
    left: 86%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    border-radius: 20px;
    color: #2f477a;
  }

  &:nth-child(2) {
    left: 12%;
    width: 70px;
    height: 70px;
    animation-delay: 1.5s;
    animation-duration: 10s;
    border-radius: 20px;
    color: gold;
  }

  &:nth-child(3) {
    left: 70%;
    width: 100px;
    height: 100px;
    animation-delay: 6.5s;
    border-radius: 20px;
    color: red;
  }

  &:nth-child(4) {
    left: 42%;
    width: 150px;
    height: 150px;
    animation-duration: 15s;
    border-radius: 20px;
    font-size: 70px;
    color: #c4302b;
  }

  &:nth-child(5) {
    left: 25%;
    width: 60px;
    height: 60px;
    animation-delay: 3s;
    border-radius: 10px;
    font-size: 26px;
    color: orange;
  }
`;

const MainducePresenter = () => {
  const menuItem = ["Trend", "Producer"];
  const icon = [faThumbsUp, faBell, faHeart, faYoutube, faGift];

  return (
    <Wrapper>
      <Main>    
        <MainHeader>
          <Logo>기브미콘</Logo>          
          <LogoImage></LogoImage>
          <ul>
            {menuItem.map(item => (
              <MenuItem>{item}</MenuItem>
            ))}
          </ul>
        </MainHeader>

        <MainTitleContainer>
          <Title>Categorys</Title>
          <Btn>게임</Btn>
          <GameImage></GameImage>
          <Btn>음악</Btn>
          <MusicImage></MusicImage>
          <Btn>뷰티</Btn>
          <BeautyImage></BeautyImage>
          <Btn>토크</Btn>
          <TalkImage></TalkImage>
          <Btn>스포츠</Btn>
          <SportsImage></SportsImage>
        </MainTitleContainer>

        <MainAniContainer>
          <MainAniBox>
            {icon.map(item => (
              <AnimateItem>
                <FontAwesomeIcon icon={item} />
              </AnimateItem>
            ))}
          </MainAniBox>
        </MainAniContainer>
      </Main>
    </Wrapper>
  );
};

export default MainducePresenter;
