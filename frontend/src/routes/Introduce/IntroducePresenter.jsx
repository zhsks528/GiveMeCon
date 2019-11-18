import React from "react";
import styled from "styled-components";
import About from "components/About";
import Header from "components/Header";
import TitleBox from "components/TitleBox";

// **** Images
import FullLogo from "components/asset/images/fullLogo.png";
import Youtube from "components/asset/images/Youtube.png";
import Producing from "components/asset/images/Producing.png";
import Instargram from "components/asset/images/Instargram.png";
import Facebook from "components/asset/images/Facebook.png";
import Mail from "components/asset/images/Mail.png";
import Intro from "components/asset/images/Intro.jpg";

const Wrapper = styled.div`
  background-image: url(${Intro});
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 60px;
`;

const Cover = styled.div`
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.4);
`;

const Message = styled.div`
  position: absolute;
  top: 23%;
  left: 20%;
  color: white;
  font-size: 36px;
  line-height: 50px;
`;

const String = styled.div`
  color: yellow;
  font-size: 48px;
  margin-top: 40px;
`;

const IntroduceWrapper = styled.div`
  width: 100%;
`;

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ContentsContainer = styled.div`
  margin-bottom: 100px;
`;

const ContentsTitle = styled.h3`
  font-size: 36px;
  margin: 0 0 20px 0;
`;

const FirstContents = styled.div`
  text-align: center;
`;

const Contents = styled.div``;

const Power = styled.span`
  font-size: 24px;
  color: #f7323f;
`;

const StrongPower = styled(Power)`
  font-size: 36px;
`;

const LowerPower = styled(Power)`
  font-size: 16px;
`;

const ContentsItemLeft = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 200px;
`;

const ContentsItemRight = styled(ContentsItemLeft)`
  grid-template-columns: 1fr 200px;
  grid-template-rows: 200px;
`;

const ItemTitle = styled.div`
  margin-bottom: 20px;
`;

const ContentsItem = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  min-width: 300px;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  border-radius: 10px;
  margin-right: 20px;
`;

const SNSContainer = styled.div`
  padding-left: 40px;
  display: flex;
`;

const ItemContainer = styled.div``;
const Logo = styled.img`
  margin-left: 400px;
`;

const IntroducePresenter = () => {
  return (
    <IntroduceWrapper>
      <Header />
      <Wrapper>
        <Cover>
          <Message>
            크리에이터와 <br /> 의사소통 공간 <br /> <String>기브미콘</String>
          </Message>
        </Cover>
      </Wrapper>
      {/* <About /> */}

      <Main>
        <ContentsContainer>
          <TitleBox title="GIVE ME CON" />
          {/* <ContentsTitle>기브미콘이란</ContentsTitle> */}
          <FirstContents>
            <Power>Give Me Contents</Power> 를 줄인 말로 써 크리에이터에게
            도움을 주는 플랫폼입니다.
          </FirstContents>
        </ContentsContainer>

        <ContentsContainer>
          <TitleBox title="SERVICES" />
          {/* <ContentsTitle>
            기브미콘의 <StrongPower>서비스</StrongPower>
          </ContentsTitle> */}
          <Contents>
            <ContentsItemLeft>
              <img src={Youtube} alt="유튜브 사진" />
              <div>
                <ItemTitle>
                  컨텐츠 <LowerPower>추천 및 순위 서비스</LowerPower>
                </ItemTitle>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </ContentsItemLeft>

            <ContentsItemRight>
              <div>
                <ItemTitle>
                  컨텐츠 <LowerPower>프로듀싱 서비스</LowerPower>
                </ItemTitle>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
              <img src={Producing} alt="프로듀싱 사진" />
            </ContentsItemRight>
          </Contents>
        </ContentsContainer>

        <ContentsContainer>
          <TitleBox title="CONTACT US" />
          {/* <ContentsTitle>
            기브미콘의 <StrongPower>연락수단</StrongPower>
          </ContentsTitle> */}
          <SNSContainer>
            <ItemContainer>
              <ContentsItem>
                <Icon src={Instargram} alt="인스타그램 아이콘" />
                <div>인스타그램@인스타그램</div>
              </ContentsItem>
              <ContentsItem>
                <Icon src={Facebook} alt="페이스북 아이콘" />
                <div>페이스북@페이스북</div>
              </ContentsItem>
              <ContentsItem>
                <Icon src={Mail} alt="메일 아이콘" />
                <div>메일메일메일@메일메일메일</div>
              </ContentsItem>
            </ItemContainer>
            <Logo src={FullLogo} alt="풀로고 사진" />
          </SNSContainer>
        </ContentsContainer>
      </Main>
    </IntroduceWrapper>
  );
};

export default IntroducePresenter;
