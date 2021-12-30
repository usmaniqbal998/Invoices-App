import React from "react";
import styled from "styled-components";
import MoonIco from "../assets/Icons/moon";
import SunIco from "../assets/Icons/sun";
import { themes } from "../common/types";
const ImageAvatar = require("../assets/image-avatar.jpg");

interface Props {
  toggleTheme: () => void;
  activeTheme: string;
}

const NavBar = ({ toggleTheme, activeTheme }: Props) => {
  const ThemeToggleIco = activeTheme === themes.LIGHT_THEME ? MoonIco : SunIco;

  return (
    <NavBarContainer>
      <WidgetsContainer>
        <ThemeToggleIco onThemeSwitchHandler={toggleTheme} />
        <Divider />
        <Avatar />
      </WidgetsContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  width: 10rem;
  height: 100vh;
  display: flex;
  position: fixed;
  background-color: ${(props) => props.theme.darkColor};
  flex-direction: column-reverse;
  border-radius: 0px 20px 20px 0px;
`;

const WidgetsContainer = styled.div`
  display: flex;
  height: 15rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Divider = styled.div`
  border: 1px solid #494e6e;
  width: 100%;
`;

const Avatar = styled.div`
  background-image: url(${ImageAvatar});
  background-position: center;
  background-size: no-repeat;
  background-size: cover;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  overflow: hidden;
`;

export default NavBar;
