import React from "react";
import GlobalStyles from "../style/globalstyles";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/themes";
import useThemeSwitch from "../hooks/useThemeSwitcher";
import { themes } from "../common/types";
import Typography from "./typography";
import Button from "./buttons";
import PlusIcon from "../assets/Icons/plusIco";
import NavBar from "./navBar";

const App = () => {
  const { activeTheme, toggleTheme } = useThemeSwitch();

  return (
    <>
      <ThemeProvider
        theme={activeTheme === themes.LIGHT_THEME ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <AppContainer>
          <NavBar activeTheme={activeTheme} toggleTheme={toggleTheme} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

const AppContainer = styled.div`
  display: flex;
`;

export default App;
