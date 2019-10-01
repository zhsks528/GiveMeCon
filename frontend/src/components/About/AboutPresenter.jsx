import React from 'react';
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faBell,
  faHeart,
  faGift
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const IntroduceWrapper = styled.div`
  width: 100%;
`;

const Introduce = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  background: #f7323f;
  margin-bottom: 60px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h2`
  color: gold;
  font-size: 60px;
  margin: 0;
`;

const SubTitle = styled(Title)`
  color: #eeeeee;
  font-size: 36px;
`;

const AniBox = styled.ul`
    width : 100%
    height : 100%;
    margin: 0;
    padding: 0;
    position : absolute;
    top : 0;
    left : 0;
    overflow : hidden;
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

const AboutPresenter = () => {
    const icon = [faThumbsUp, faBell, faHeart, faYoutube, faGift];

    return (
      <Introduce>
        <AniBox>
          {icon.map(item => (
            <AnimateItem>
              <FontAwesomeIcon icon={item} />
            </AnimateItem>
          ))}
        </AniBox>

        <TitleContainer>
          <SubTitle>크리에이터를 위한</SubTitle>
          <SubTitle>소통의 공간</SubTitle>
          <Title>기브미콘</Title>
        </TitleContainer>
      </Introduce>
    )
}

export default AboutPresenter;