import { useEffect } from "react";
import IconButton from "./IconButton";
import { useIsDarkMode, useToggleDarkMode } from "../context/GlobalContext";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";

const DarkModeSwitch = (): JSX.Element => {
  const isDarkMode = useIsDarkMode();
  const toggleDarkMode = useToggleDarkMode();

  useEffect(() => {
    const shouldShowDarkMode = (): void => {
      if (isDarkMode) {
        window.localStorage.removeItem("dark-mode");
        window.document.body.classList.remove("day-mode");
      } else {
        window.localStorage.setItem("dark-mode", "false");
        window.document.body.classList.add("day-mode");
      }
    };
    shouldShowDarkMode();
  }, [isDarkMode]);

  return (
    <IconButton
      icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
      onClick={toggleDarkMode}
    />
  );
};

export default DarkModeSwitch;
