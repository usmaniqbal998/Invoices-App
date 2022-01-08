import React from "react";
import GlobalStyles from "../style/globalstyles";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/themes";
import useThemeSwitch from "../hooks/useThemeSwitcher";
import { themes } from "../common/types";
import NavBar from "./Navbar";
import Main from "./Main";

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
          <Main />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

const AppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 0;
`;

export default App;
