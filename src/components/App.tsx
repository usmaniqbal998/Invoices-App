import React from "react";
import GlobalStyles from "../style/globalstyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/themes";
import useThemeSwitch from "../hooks/useThemeSwitcher";
import { themes } from "../common/types";

const App = () => {
  const { activeTheme, toggleTheme } = useThemeSwitch();

  return (
    <>
      <ThemeProvider
        theme={activeTheme === themes.LIGHT_THEME ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <button onClick={toggleTheme}>change theme</button>
      </ThemeProvider>
    </>
  );
};

export default App;
