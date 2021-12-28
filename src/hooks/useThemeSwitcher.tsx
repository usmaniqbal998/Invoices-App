import { useState } from "react";
import { themes } from "../common/types";

const useThemeSwitch = () => {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem("theme") || themes.LIGHT_THEME;
  });

  const toggleTheme = () => {
    setActiveTheme(
      activeTheme === themes.LIGHT_THEME
        ? themes.DARK_THEME
        : themes.LIGHT_THEME
    );
    localStorage.setItem(
      "theme",
      activeTheme === themes.LIGHT_THEME
        ? themes.DARK_THEME
        : themes.LIGHT_THEME
    );
  };

  return { activeTheme, toggleTheme };
};

export default useThemeSwitch;
