import React from "react";
import GlobalStyles from "../style/globalstyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/themes";
import useThemeSwitch from "../hooks/useThemeSwitcher";
import { themes } from "../common/types";
import Typography from "./typography";

const App = () => {
  const { activeTheme, toggleTheme } = useThemeSwitch();

  return (
    <>
      <ThemeProvider
        theme={activeTheme === themes.LIGHT_THEME ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <button onClick={toggleTheme}>change theme</button>
        <Typography variant="body1">Some Random Heading</Typography>
      </ThemeProvider>
    </>
  );
};

export default App;
