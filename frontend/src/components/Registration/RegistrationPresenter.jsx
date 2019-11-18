import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faBookmark,
  faKey
} from "@fortawesome/free-solid-svg-icons";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;

  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f5f5f5;
  border-radius: 14px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 36px;
`;

const SubTitle = styled.div`
  font-size: 16px;
`;

const Body = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ChangeForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: #f7323f;
  border-radius: 14px;
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    width: 30px;
    height: 30px;
    padding: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

const Sumbit = styled.input`
  border: none;
  border-radius: 14px;
  background: #15933a;
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
`;

const RegistrationPresenter = ({
  changeAction,
  email,
  setEmail,
  fullname,
  setFullName,
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit
}) => {
  return (
    <FormContainer>
      <Header>
        <Title>회원가입</Title>
        <SubTitle>기브미콘</SubTitle>
      </Header>
      <Body>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Icon icon={faEnvelope} />
            <Input
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="이메일"
            />
          </InputContainer>
          <InputContainer>
            <Icon icon={faBookmark} />
            <Input
              type="text"
              value={fullname}
              onChange={event => setFullName(event.target.value)}
              placeholder="이름"
            />
          </InputContainer>
          <InputContainer>
            <Icon icon={faUser} />
            <Input
              type="text"
              value={username}
              onChange={event => setUsername(event.target.value)}
              placeholder="아이디"
            />
          </InputContainer>

          <InputContainer>
            <Icon icon={faKey} />
            <Input
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="비밀번호"
              autocomplete="on"
            />
          </InputContainer>

          <Sumbit type="submit" value="회원가입" />
        </Form>
      </Body>
      <ChangeForm>
        <div>회원이신가요?</div>
        <Button onClick={changeAction}>로그인</Button>
      </ChangeForm>
    </FormContainer>
  );
};

export default RegistrationPresenter;
