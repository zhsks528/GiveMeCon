import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  height: 60px;
  margin: 0 auto;
`
const Title = styled.h3`
  color: #6b6b6b;
  font-size : 30px;
  margin : 0 0 5px 0;
`
const AddItem = styled.li`
    border: 1px solid white;
    border-radius: 5px;
    background-color: red;
    list-style: none;
    padding: 10px 20px;
    color: white;
    cursor: pointer;    
`;

const ContentContainer = styled.div`
  display: flex;
  width: 1024px;
  height: 300px;
  margin: 0 auto;
  
`
const ContentBox = styled.div`  
  margin: 0 10px 40px 10px;
`
const SubTitleContainer = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
`

const SubTitle = styled.h3`
  font-size : 20px;
  margin : 0 0 5px 0;
`

const ItemCheck = styled.li`
    border: 1px solid white;
    border-radius: 5px;
    background-color: red;
    list-style: none;
    padding: 5px 5px;
    color: white;
    cursor: pointer;
    margin: 0 0 0 5px;    
`;

const RankBox = styled.div`
  float: left;
  display: inline;
  background-color: white; 
  width: 500px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box; 
`
const VideoContainer = styled.div`
  display: flex;
  width: 1024px;
  height: 180px;
  margin: 0 auto;
`

const VideoBox = styled.div`
  float: left;
  display: inline;
  background-color: white; 
  width: 200px;
  height: 170px;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box; 
  margin: 5px 5px;
`
const SportPresenter = () => {


  return (
    <Wrapper>

      <Main>
        
          <TitleContainer>
              <Title>※스포츠</Title><AddItem>컨텐츠 쓰기</AddItem>
          </TitleContainer>

          <ContentContainer>
              <ContentBox>
                  <SubTitle>이번 달 컨텐츠 순위</SubTitle>
                  <RankBox/>
              </ContentBox>
              <ContentBox>
                  <SubTitle>이번 달에 생겨난 키워드</SubTitle>
                  <RankBox/>
              </ContentBox>
          </ContentContainer>
          
          <SubTitleContainer>
            <SubTitle>컨텐츠 영상</SubTitle>
            <ItemCheck>컨텐츠</ItemCheck>
          </SubTitleContainer>
          
          <VideoContainer>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
          </VideoContainer>
          <VideoContainer>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
          </VideoContainer>
          <VideoContainer>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
          </VideoContainer>
          <VideoContainer>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
              <VideoBox></VideoBox>
          </VideoContainer>
          
        
      </Main>
    </Wrapper>
  );
};

export default SportPresenter;
