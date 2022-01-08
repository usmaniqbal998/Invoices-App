import { useCallback, useEffect, useState } from "react";
import { themes } from "../common/types";

const useThemeSwitch = () => {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem("theme") || themes.LIGHT_THEME;
  });

  useEffect(() => {
    localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  const toggleTheme = useCallback(() => {
    setActiveTheme((theme) =>
      theme === themes.LIGHT_THEME ? themes.DARK_THEME : themes.LIGHT_THEME
    );
  }, [setActiveTheme]);

  return { activeTheme, toggleTheme };
};

export default useThemeSwitch;
