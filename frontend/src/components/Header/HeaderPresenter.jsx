import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "components/asset/images/logo.png";
import Popover from "@material-ui/core/Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import ProfilePage from "components/Profile";

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
  width: 80%;
  height: 60px;
  margin: 0 auto;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
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
  margin: 0;
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
  list-style: none;
`;

const LinkItem = styled(Link)`
  color: ${props => (props.current ? "#f7323f" : "#6b6b6b;")};
  text-decoration: none;
  &:hover {
    color: #f7323f;
  }
`;

const Login = styled(LinkItem)`
  font-size: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 140px;
  cursor: pointer;
  color: #6b6b6b;

  &:hover {
    color: #3897f0;
  }
`;

const Profile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PopItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #6b6b6b;
  cursor: pointer;

  &:hover {
    background: #3897f0;
    color: white;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const HeaderPresenter = ({
  handleLogout,
  isLoggedIn,
  myProfile,
  open,
  anchorEl,
  handleClick,
  handleClose,
  seeingProfile,
  handleOpenProfile,
  handleCloseProfile
}) => {
  const { pathname } = window.location;

  return (
    <HeaderWrapper>
      <MainContainer>
        <LogoContainer to="/">
          <LogoIcon src={Logo} alt="로고" />
          <Title>기브미콘</Title>
        </LogoContainer>

        <HeaderList>
          <ListItem>
            <LinkItem to="/" current={pathname === "/"}>
              트렌드
            </LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/production" current={pathname === "/production"}>
              프로듀싱
            </LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/introduce" current={pathname === "/introduce"}>
              소개
            </LinkItem>
          </ListItem>
        </HeaderList>

        {isLoggedIn ? (
          <>
            <ProfileContainer onClick={handleClick}>
              {myProfile.profile_image ? (
                <Profile src={myProfile.profile_image} alt="프로필" />
              ) : (
                <Icon icon={faUserCircle} />
              )}
              <div>{myProfile.username}</div>
            </ProfileContainer>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            >
              <PopItemContainer>
                <Icon icon={faUserCircle} />
                <div onClick={handleOpenProfile}>프로필</div>
              </PopItemContainer>
              <PopItemContainer>
                <Icon icon={faPowerOff} />
                <div onClick={handleLogout}>로그아웃</div>
              </PopItemContainer>
            </Popover>
          </>
        ) : (
          <ListItem>
            <Login to="/auth" current={pathname === "/auth"}>
              로그인
            </Login>
          </ListItem>
        )}
      </MainContainer>
      {seeingProfile && <ProfilePage handleCloseProfile={handleCloseProfile} />}
    </HeaderWrapper>
  );
};

export default HeaderPresenter;
