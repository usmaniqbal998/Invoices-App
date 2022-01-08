import React from "react";
import styled from "styled-components";
import Logo from "../assets/Icons/logo";
import MoonIco from "../assets/Icons/moon";
import SunIco from "../assets/Icons/sun";
import { themes } from "../common/types";
import { device } from "../style/devices";
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
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.darkColor};
  flex-direction: column-reverse;
  border-radius: 0 2rem 2rem 0;
  justify-content: space-between;

  @media ${device.tablets} {
    flex-direction: row-reverse;
    height: 8rem;
    width: 100%;
    border-radius: 0;
  }

  @media ${device.mobiles} {
    height: 7rem;
  }
`;

const WidgetsContainer = styled.div`
  display: flex;
  height: 15rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media ${device.tablets} {
    flex-direction: row;
    height: 100%;
    width: 12rem;
  }
`;

const Divider = styled.div`
  border: 1px solid #494e6e;
  width: 100%;

  @media ${device.tablets} {
    width: 1px;
    height: 100%;
  }
`;

const Avatar = styled.div`
  background-image: url(${ImageAvatar});
  background-position: center;
  background-size: no-repeat;
  background-size: cover;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1.6rem;
  overflow: hidden;

  @media ${device.mobiles} {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const LogoContainer = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 0 2rem 2rem 0;
  width: 10rem;
  height: 10rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    width: 100%;
    height: 10rem;
    background-color: ${(props) => props.theme.primaryLight};
    border-radius: 2rem 0 0 2rem;
    position: absolute;
    top: 50%;

    @media ${device.tablets} {
      height: 8rem;
    }

    @media ${device.mobiles} {
      height: 7rem;
    }
  }

  @media ${device.tablets} {
    height: 8rem;
    width: 8rem;
  }

  @media ${device.mobiles} {
    height: 7rem;
  }
`;

export default NavBar;
