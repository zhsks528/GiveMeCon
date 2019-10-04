import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Header from 'components/Header';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

const SubTitleContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  background: white;
  margin-bottom: 40px;
`;

const SubTitleBox = styled.div`
  display: flex;
  list-style: none;
  position: absolute;
  top: 40%;
  left: 28%;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
`;

const ListItem = styled.li`
  padding: 20px 20px;
  color: #6b6b6b;
  cursor: pointer;
`;

const LinkItem = styled(Link)`
  color: #6b6b6b;
  text-decoration : none;
  &:hover {
    color: #f7323f;
  }
`
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
const SubTitle = styled.h3`
  font-size : 20px;
  margin : 0 0 5px 0;
`

const Data = styled.h3`
  font-size : 15px;
  margin : 0 0 5px 0;
`
const CategoryBox = styled.div`
  margin-bottom: 60px;
`
const Category = styled.div`
  float: left;
  display: inline;
  background-color: white; 
  width: 280px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 20px 20px 30px;
  box-sizing: border-box;
`
const TrendPresenter = () => {


  return (
    <Wrapper>
      <Header/>

      <Main>
        <SubTitleContainer>
          <SubTitleBox>
          <ListItem>
              <LinkItem to="/">
                전체
              </LinkItem>
          </ListItem>
          <ListItem>
              <LinkItem to="/">
                음악
              </LinkItem>
          </ListItem>
          <ListItem>
              <LinkItem to="/">
                스포츠
              </LinkItem>
          </ListItem>
          <ListItem>
              <LinkItem to="/">
                영화
              </LinkItem>
          </ListItem>
          <ListItem>
              <LinkItem to="/">
                게임
              </LinkItem>
          </ListItem>
          </SubTitleBox>
        </SubTitleContainer>

        <Title>카테고리</Title>

        <TitleContainer>
          <SubTitle>이번 달 Best Top 3</SubTitle>
          <Data>2019.10.03 18:00</Data>
        </TitleContainer>

        <CategoryBox>
          <Category>

          </Category>
          <Category>
          
          </Category>
          <Category>
          
          </Category>
        </CategoryBox>

        <TitleContainer>
          <SubTitle>카테고리 리스트</SubTitle>
          <Data>2019.10.03 18:00</Data>
        </TitleContainer>

        <CategoryBox>
          <Category>
          
          </Category>
          <Category>
          
          </Category>
          <Category>
          
          </Category>
          <Category>
          
          </Category>
          <Category>
          
          </Category>
          <Category>
          
          </Category>
        </CategoryBox>

      </Main>
    </Wrapper>
  );
};

export default TrendPresenter;
